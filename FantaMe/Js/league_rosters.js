var leagueInfo = __.g('li');
var isMantra = leagueInfo.type == 2;
var serverData = {};
var tmp = String(__.g('tmp')).split("|"); //Recupero i dati dalla pagina HTML scritta dal server
var selectedTeam = tmp[1]; 
var timestamp = tmp[2]; 
var invisibleRosters = Utils.parseBool(String(tmp[3]).toLowerCase()); 
var competitionIds = tmp[0].split(';').filter(v=>!isNaN(parseInt(v)));
var teams = Utils.sortByKey(__.g('lt'), 'nome', false, false); 
var enabledTeams = null;
var $items = null;
var teamFilterOptions = null;


//$(document).on("fg.user.inititalized", function () {
$(document).on("fg.init.complete", function () {
  
    Log.info('league_rosters.js::init - teams: ', teams);
    Log.info('league_rosters.js::init - competitionIds: ', competitionIds);
    Log.info('league_rosters.js::init - selectedTeam: ' + selectedTeam + " - timestamp: " + timestamp);
  
    //if (invisibleRosters) return;
    
    if (competitionIds.length == 0) {
        $('.main-content').addClass('no-competitions');
        setTimeout(()=>{$('[data-key="all"]').click();}, 1);
    }

    init();

    
})



function init() {
    $('.main-content').addClass('initialized'); //Evita che su IE (o se c'è un errore js) vengano visualizzate le ROSE

    //for (var i in teams) {
    //    teams[i].players = STUB_ROSTER_A;
    //    teams[i].totalCost = teams[i].players.reduce((tot, player)=>Number(tot) + Number(player.price), 0)
    //}

    Log.info('league_rosters.js::init - teams: ', teams);
    //Utils.wrap('.handlebar-rosters', {rosters:teams}, onWrapped);
    onWrapped();
    
    $('#filterNavbar').click(function(e) {
        e.preventDefault();
        if (!$items) return;

        var key = e.target && e.target.getAttribute('data-key');
        if (key) {
            $('#filterNavbar li.active').removeClass('active');
            $(e.target).closest('li').addClass('active');
            filterTeams(key);
        }
    })
    
    if (!selectedTeam) selectedTeam = urlParams['t'];

    if (invisibleRosters && !selectedTeam) {
        //Se le rose sono invisibili, l'unica squadra selezionata è la propria
        //selectedTeam = MyTeam.getId();
    }
    
    //selectedTeam = 1452059;
    //filterTeams(selectedTeam || 'all');
    filterTeams(selectedTeam ? 'all' : 'competition');
    
}

function onWrapped() {
    $items = $('.list-rosters .list-rosters-item');

    $items.each(function(i, item) {
        var $item = $(item)
        $item.toggleClass('current-competition-team', Utils.thereIs(competitionIds, $item.attr('data-id'))  )
    })
}

function filterTeams(key) {
    Log.info("league_rosters::filterTeams - key:"+key);
    if (key == 'all') {
        $('.tab-rosters').removeClass('filtered');
        //$items.removeClass('disabled');
        enabledTeams = teams;
        initTeamFilter();

    } else {
        $('.tab-rosters').addClass('filtered');

        //Api.fake(true, [selectedTeam], onFilterTeamsResponse)
        onFilterTeamsResponse({data:competitionIds});

    }
}

function onFilterTeamsResponse(response) {
    Log.info("league_rosters::onFilterTeamsResponse - response: ", response);
    var competitionTeams = response.data;
    enabledTeams = teams.filter(t=>Utils.thereIs(competitionTeams, t.id));

    /*
    $items.each(function(i, item) {
        $item = $(item);
        var itemId = $item.attr('data-id');
        var isDisabled = !Utils.thereIs(competitionTeams, itemId);
        $item.toggleClass('disabled', isDisabled);                
    })
    */
    initTeamFilter();
}

function initTeamFilter() {
    $('.list-rosters').toggleClass('disable-animations', enabledTeams.length > 10);

    teamFilterOptions = Utils.sortByKey(enabledTeams, 'nome', false, false);
    
    Utils.wrap('.handlebar-team-filter', {  options:teamFilterOptions,
                                            mobile:Globals.isMobile
                                         }, function() {
        
        $('.list-rosters-item').removeClass('hidden');

        $('#teamFilter').on('changed.bs.select', function (e, clickedIndex, newValue, oldValue) {
            var filtereds = $('#teamFilter').val();
            
            if (invisibleRosters) {
                if (filtereds.length == 0) {
                    filtereds = [MyTeam.getId()];
                } else {
                    filtereds = filtereds.filter(id=>id==MyTeam.getId());
                }
            }
            
            UI.disableLazyLoad();           
            $('.list-rosters-item[data-id]').each((i,item)=>{
                var $item = $(item);
                var itemId = $item.attr('data-id');
                $item.toggleClass('hidden', filtereds.indexOf(itemId) == -1);
                if ($item.is('.hidden')) $item.attr('style', '');
            });

            if (filtereds.length == 0) {
                UI.enableLazyLoad();
            }

            

            return;

            //OLD//////////////////////////////
            //OLD//////////////////////////////
            //OLD//////////////////////////////
            //OLD//////////////////////////////

            if (Globals.isMobile) {

                UI.disableLazyLoad();
                if (filtereds == "") {
                    //Cancella selezione
                    $('.list-rosters-item').removeClass('hidden');
                    UI.enableLazyLoad();

                } else {
                    $('.list-rosters-item').addClass('hidden').attr('style', '');
                    $('.list-rosters-item[data-id='+filtereds+']').removeClass('hidden');
                }
                

            } else {

                if (typeof clickedIndex != 'undefined' && filtereds.length > 0) {
                    UI.disableLazyLoad();
                    if (filtereds.length == 1 && oldValue == false) {
                        $('.list-rosters-item').addClass('hidden').attr('style', '');;
                    }
                    var teamId = teamFilterOptions[clickedIndex].id;
                    $('.list-rosters-item[data-id='+teamId+']').toggleClass('hidden', !newValue).attr('style', '');

                } else {
                    //SELECT/DESELECT ALL   
                    if (invisibleRosters && filtereds.length == 0) {
                        $('.list-rosters-item').addClass('hidden');
                    
                    } else {
                        $('.list-rosters-item').removeClass('hidden');
                    }
                    UI.enableLazyLoad();
                
                }
            }
        });

        
        if (selectedTeam || invisibleRosters) {
            
            $('.list-rosters').addClass('disable-animations');
            $('#teamFilter').selectpicker('val', selectedTeam);            
            $('.list-rosters-item').addClass('hidden').attr('style', '');
            
            if (invisibleRosters && !selectedTeam) {
                $('.list-rosters-item[data-id='+MyTeam.getId()+']').removeClass('hidden');

            } else {
                if (!invisibleRosters || selectedTeam == MyTeam.getId()) $('.list-rosters-item[data-id='+selectedTeam+']').removeClass('hidden');

            }
            setTimeout(function() {
                $('.list-rosters').toggleClass('disable-animations', enabledTeams.length > 10);
            }, 10);
            UI.disableLazyLoad();
        }
        
        //Utilizza il trigger dello scroll della viewport per aggiornare il lazy-load
        //$('.lazy').removeClass('lazy');
    });

}

function downloadRosters() {
    Log.info("league_ranking::downloadRosters... ");
    if (MyUser.isInCurrentLeague()) {
        Api.downloadRosters();

    } else {
        Log.info("league_ranking::downloadRosters IMPOSSIBILE! L'utente non appartiene a questa "+Globals.tip+"... ");

        EditModal.preset('info', {
            title: "Effettua il login!",
            message: "<p>Per scaricare il file delle rose devi prima effettuare il login.<br><br></p>"
        });
            
    }
}
