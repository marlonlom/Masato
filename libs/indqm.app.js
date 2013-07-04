var indq = {
    templates: {},
    atHome: true,
    googleMapsState: "",
    iscroll: null
};
indq.initialize = function () {
    this.templates.home = Handlebars.compile($("#hbt-home").html());
    this.templates.indqsList = Handlebars.compile($("#hbt-indiqs-list").html());
    this.templates.searchs = Handlebars.compile($("#hbt-search-results").html());
};
indq.isOffline = function () {
    var connectionType = navigator.connection ? navigator.connection.type : null;
    return connectionType !== null && (connectionType == Connection.NONE || connectionType == Connection.UNKNOWN);
};
indq.toggleClickEvent = function () {
    return $.device.mobile ? 'touchstart' : 'click';
};
indq.showAlert = function (message, title) {
    if (navigator.notification) {
        navigator.notification.alert(message, null, title, 'OK');
    } else {
        alert(title ? (title + ": " + message) : message);
    }
};
indq.handleDANEWebpageAccess = function () {
    $('body').on(indq.toggleClickEvent(), '.danelogo1', function (e) {
        e.preventDefault();
        window.open('http://www.dane.gov.co', '_system');
    });
};
indq.handleSearchBox = function () {
    $('body').on(indq.toggleClickEvent(), 'button#search-btn', function (e) {
        e.preventDefault();
        var searchtext = $('input#search-text').val() || 'nah';
        indq.prepareSearchsView(searchtext);
    });
};
indq.prepareCommonPageBehaviour = function () {
    if(FastClick){
        FastClick.attach(document.body);
    }
    
    if (indq.iscroll !== null) {
        indq.iscroll.destroy();
        indq.iscroll = null;
    }
    indq.iscroll = new iScroll("wrapper");
};
indq.prepareMainView = function () {
    $('body').off(indq.toggleClickEvent());
    
    $('body').html(this.templates.home({
        menu: data.categs
    }));

    indq.prepareCommonPageBehaviour();
    
    $('body').off(indq.toggleClickEvent()).on(indq.toggleClickEvent(), 'a.categ-link', function (e) {
        e.preventDefault();
        var hash = $(this).attr('data-home-link') || 'nah';
        indq.showIndicatorsListView(hash);
    });
    indq.handleDANEWebpageAccess();
    indq.handleSearchBox();
    
};
indq.prepareSearchsView = function (searchtext) {
    if (searchtext !== 'nah') {
        var resultList = [];
        var indiqsFound = $.grep(data['indiqs'], function (item, index) {
            return item['nom'].toLowerCase().search(searchtext) >= 0;
        });
        resultList = resultList.concat(indiqsFound);

        var context = {
            upperTip: "Resultados de la búsqueda",
            list: resultList
        };
        $('body').html(indq.templates.searchs(context));

        indq.prepareCommonPageBehaviour();
        
        $('li.item-li').addClass('mpios-li').each(function (index) {
            var odd = index % 2 === 0;
            $(this).addClass(odd ? 'mpios-odd-li' : 'mpios-even-li');
        });
        
    } else {
        indq.showAlert('Ingrese un texto.', 'Buscar');
    }
};

indq.showIndicatorsListView = function (hash) {
    $('body').off(indq.toggleClickEvent());
    indq.atHome = false;

    var categfound = $.grep(data['categs'], function (item, index) {
        return item['cod'] === hash;
    });
    
    var indiqsFound = $.grep(data['indiqs'], function (item, index) {
        return item['categ'] === hash;
    });

    var context = {
        categoryName: categfound !== null && categfound.length > 0 ? categfound[0].nom : '',
        list: indiqsFound
    };
    
    $('body').html(this.templates.indqsList(context));
    
    indq.prepareCommonPageBehaviour();

    $('body').on(indq.toggleClickEvent(), 'img.back-home-icon', function (e) {
        e.preventDefault();
        indq.atHome = true;
        indq.prepareMainView();
    }).on(indq.toggleClickEvent(), 'img.vmap-icon', function (e) {
        e.preventDefault();
        var btn = $(this);
        indq.prepareMappingView(btn);
    }).on(indq.toggleClickEvent(), 'img.back-prev-icon', function (e) {
        e.preventDefault();
        var prev_page = $('#prev-page').val() || 'none';
        if (prev_page === 'home') {
            indq.atHome = true;
            indq.prepareMainView();
        }
    });
    $('li.item-li').addClass('mpios-li').each(function (index) {
        var odd = index % 2 === 0;
        $(this).addClass(odd ? 'mpios-odd-li' : 'mpios-even-li');
    });
    
    indq.handleDANEWebpageAccess();
};