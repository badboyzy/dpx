/**
 * Created by yaxi on 2015-07-29.
 */
var utils = {
  chatboxProp: {
    isVisit: 0,
    isChatBoxShow: 0,
    isServiceTime: 0
  },
  broswer: {
    IE6: 'msie 6',
    IE7: 'msie 7',
    IE8: 'msie 8',
    IE9: 'msie 9',
    IE10: 'msie 10',
    IE11: 'msie 11',
    Chrome: 'chrome',
    Firefox: 'firefox',
    Opera: 'opera',
    Safari: 'safari',
    Netscape: 'netscape'
  },

  isFromMobile: function () {
    var agent = navigator.userAgent.toLowerCase()
    var ipad = agent.match(/(ipad).*os\s([\d_]+)/),
      isIphone = !ipad && agent.match(/(iphone\sos)\s([\d_]+)/),
      isAndroid = agent.match(/(android)\s+([\d.]+)/),
      isWinPhone = agent.match(/(windows mobile)\s+([\d.]+)/),
      isMobile = ipad || isIphone || isAndroid || isWinPhone
    return isMobile
  },

  getBroswer: function () {
    var defaultBroswer = 'netscape', agent = navigator.userAgent.toLowerCase()
    if (/(msie|firefox|opera|chrome|netscape)\D+(\d[\d.*])/.test(agent)) {
      var name = RegExp.$1, versionNum = parseInt(RegExp.$2)
      defaultBroswer = name,
      'msie' == name && (defaultBroswer += ' ' + versionNum)
    } else /version\D+(\d[\d.]*).*safari/.test(agent) && (defaultBroswer = 'safari')

    return defaultBroswer
  },

  eventOn: function (elem, eventtype, func) {
    elem = ('string' == typeof elem ? document.getElementById(elem) : elem)
    elem.addEventListener ? elem.addEventListener(eventtype, func, false) : (elem.attachEvent ? elem.attachEvent('on' + eventtype, func) : elem['on' + eventtype] = func)
  },
  getCookie: function (key) {
    var strCookie = document.cookie
    var arrCookie = strCookie.split('; ')
    for (var i = 0; i < arrCookie.length; i++) {
      var arr = arrCookie[i].split('=')
      if (arr[0] == key)
        return arr[1]
    }
    return ''
  },
  setCookie: function (obj, value, exp, domain) {
    var cookieTime = 24 * 60 * 60 * 1000
    if (exp) {
      cookieTime = exp
    }
    var d = new Date()
    d.setTime(d.getTime() + cookieTime)
    var cookieExpires = '; expires=' + d.toGMTString()
    var domainStr = ''
    if (domain && domain != undefined) {
      domainStr = '; domain=' + domain
    }

    if ('string' == typeof obj) {
      document.cookie = obj + '=' + encodeURIComponent(value) + cookieExpires + domainStr + '; path=/'
    } else {
      for (var key in obj) {
        document.cookie = key + '=' + encodeURIComponent(obj[key]) + cookieExpires + domainStr + '; path=/'
      }
    }

  },
  makeQuery: function (json) {
    json = json || {}
    var query_arr = []
    json.__ = new Date().getTime()
    for (var key in json) {
      var val = json[key]
      query_arr.push(key + '=' + encodeURIComponent(val))
    }
    var query = query_arr.join('&').replace(/%20/g, '+')
    return query
  },

  aniMove: function (element, position, speed, callback) {
    if (!element.effect) {
      element.effect = {}
      element.effect.move = 0
    }
    clearInterval(element.effect.move)
    var speed = speed || 30
    var start = {
      left: element.offsetLeft,
      bottom: position.b,
      top: element.offsetTop,
      right: position.r
    }
    var style = element.style
    var parr = new Array()
    if (typeof(position.left) == 'number') {
      parr.push('left')
    }
    if (typeof(position.right) == 'number') {
      parr.push('right')
    }
    if (typeof(position.bottom) == 'number') {
      parr.push('bottom')
    }
    if (typeof(position.top) == 'number') {
      parr.push('top')
    }

    element.effect.move = setInterval(function () {
      for (var i = 0; i < parr.length; i++) {
        start[parr[i]] += (position[parr[i]] - start[parr[i]]) * speed / 100
        style[parr[i]] = start[parr[i]] + 'px'
      }
      for (var i = 0; i < parr.length; i++) {
        if (Math.round(start[parr[i]]) == position[parr[i]]) {
          if (i != parr.length - 1) {
            continue
          }
        } else {
          break
        }
        for (var i = 0; i < parr.length; i++) {
          style[parr[i]] = position[parr[i]] + 'px'
        }

        clearInterval(element.effect.move)
        if (callback) {
          callback()
        }
      }

    }, 20)
  },
  chatBtnPosition: function () {
    var btn = document.getElementById('chatBtn')
    var data = onlineData
    var chatPos = {}
    if (data.cssStyle.chatboxLocation) {
      btn.style.borderTopLeftRadius = '0px'
      btn.style.borderTopRightRadius = '0px'
      btn.style.borderBottomRightRadius = '0px'
      btn.style.borderBottomLeftRadius = '0px'
      btn.style.bottom = ''
      btn.style.padding = ''
      if (data.cssStyle.chatButtonLocation == 'bottom-left') {
        btn.style.left = data.cssStyle.chatButtonSideMargin + 'px'
        btn.style.bottom = '-1px'
      } else if (data.cssStyle.chatButtonLocation == 'bottom-right') {
        btn.style.right = data.cssStyle.chatButtonSideMargin + 'px'
        btn.style.bottom = '-1px'
      } else if (data.cssStyle.chatButtonLocation == 'side-left') {
        btn.style.left = '-1px'
        btn.style.bottom = data.cssStyle.chatButtonBottomMargin + 'px'
        btn.style.borderBottomRightRadius = '5px'
        btn.style.borderTopRightRadius = '5px'
      } else if (data.cssStyle.chatButtonLocation == 'side-right') {
        btn.style.right = '-1px'
        btn.style.bottom = data.cssStyle.chatButtonBottomMargin + 'px'
        btn.style.borderTopLeftRadius = '5px'
        btn.style.borderBottomLeftRadius = '5px'
      } else if (data.cssStyle.chatButtonLocation == 'circle-left') {
        btn.style.left = data.cssStyle.chatButtonSideMargin + 'px'
        btn.style.bottom = data.cssStyle.chatButtonBottomMargin + 'px'
      } else if (data.cssStyle.chatButtonLocation == 'circle-right') {
        btn.style.right = data.cssStyle.chatButtonSideMargin + 'px'
        btn.style.bottom = data.cssStyle.chatButtonBottomMargin + 'px'
      }
      if (data.cssStyle.chatButtonLocation == 'side-left' || data.cssStyle.chatButtonLocation == 'side-right') {
        btn.getElementsByTagName('span')[0].style.wordBreak = 'break-all'
        btn.getElementsByTagName('span')[0].style.wordWrap = 'break-word'
        btn.getElementsByTagName('span')[0].style.width = '14px'
        btn.getElementsByTagName('span')[0].style.display = 'block'
        btn.getElementsByTagName('img')[0].style.padding = '0px 6px -5px 0px'
        btn.getElementsByTagName('span')[0].style.padding = '0px 6px'
        btn.style.padding = '10px 8px'
      } else if (data.cssStyle.chatButtonLocation == 'circle-right' || data.cssStyle.chatButtonLocation == 'circle-left') {
        btn.style.width = '25px'
        btn.style.height = '25px'
        btn.style.borderRadius = '55px'
        btn.style.padding = '15px'
        btn.getElementsByTagName('img')[0].style.width = '25px'
        btn.getElementsByTagName('img')[0].style.height = '25px'
        btn.getElementsByTagName('img')[0].style.margin = ''
        btn.getElementsByTagName('span')[0].innerHTML = ''
      } else if (data.cssStyle.chatButtonLocation == 'bottom-left' || data.cssStyle.chatButtonLocation == 'bottom-right') {
        btn.getElementsByTagName('img')[0].style.margin = '0px 5px -6px 0px'
        btn.style.padding = '8px 10px 8px 10px'
        btn.style.borderTopLeftRadius = '5px'
        btn.style.borderTopRightRadius = '5px'
      }
      chatPos = {
        'left': btn.style.left,
        'right': btn.style.right,
        'bottom': btn.style.bottom
      }
      return chatPos
    } else {
      btn.style.right = '18px'
      btn.style.padding = '8px 10px 8px 10px'
      btn.style.borderTopLeftRadius = '5px'
      btn.style.borderTopRightRadius = '5px'
      btn.style.borderBottomRightRadius = '0px'
      btn.style.borderBottomLeftRadius = '0px'
    }

  }

}
var styleColor = undefined
var peers = undefined
var selectPeer = ''
var seoUrl = config.referrer   // 获取真实来路
var seoSource = ''  // 搜索来源
var seoKeywords = ''  // 搜索关键字
var skey = 'qimo_seosource_' + config.accessId
var kkey = 'qimo_seokeywords_' + config.accessId

var getSeoParams = function () {
  // remote_ip_info为新浪ip服务接口返回对象
  // area = remote_ip_info.country + '-' + remote_ip_info.province + '-' + remote_ip_info.city;

  var temps = utils.getCookie(skey)
  var tempk = utils.getCookie(kkey)
  if (temps || tempk) {
    if (temps) {
      seoSource = decodeURIComponent(temps)
    }
    if (tempk) {
      seoKeywords = decodeURIComponent(tempk)
    }

    if (temps && seoSource != '站内') {
      return
    }

  }
  if (seoUrl == '') {
    seoSource = '站内'
    seoKeywords = ''
  } else {
    var host = seoUrl.split('/')[2]
    if (host == 'www.baidu.com') {
      seoSource = '百度搜索'
      if (seoUrl.indexOf('?') > 0) {
        var query_arr = seoUrl.split('?')[1].split('&')
        query_arr.forEach(function (query) {
          var temp = query.split('=')
          if (temp[0] == 'wd') {
            seoKeywords = temp[1]
          }
        })
      }
    } else if (host == 'www.so.com') {
      seoSource = '360搜索'
      if (seoUrl.indexOf('?') > 0) {
        var query_arr = seoUrl.split('?')[1].split('&')
        query_arr.forEach(function (query) {
          var temp = query.split('=')
          if (temp[0] == 'q') {
            seoKeywords = temp[1]
          }
        })
      }
    } else if (host == 'www.sogou.com') {
      seoSource = '搜狗搜索'
      if (seoUrl.indexOf('?') > 0) {
        var query_arr = seoUrl.split('?')[1].split('&')
        query_arr.forEach(function (query) {
          var temp = query.split('=')
          if (temp[0] == 'query') {
            seoKeywords = temp[1]
          }
        })
      }
    } else if (host == window.location.host) {
      seoSource = '站内'
      seoKeywords = ''
    } else {
      seoSource = '其他网站'
      seoKeywords = '未知'
    }
  }
  if (seoSource || seoKeywords) {
    utils.setCookie(skey, seoSource, 30 * 60 * 1000) //30分钟
    utils.setCookie(kkey, seoKeywords, 30 * 60 * 1000) //30分钟
  }

}

getSeoParams()

function QiMoIMSDK () {
  var self = this
  var mini = false
  var closeTip = false
  this.chatboxstyle = {
    html: '<div class=\'qimo_chatpup\' id=\'qimo_chatpup\' style=\'display: none; \'>' +
    '<iframe id=\'chatIframe\' src=\'\' height=\'100%\' width=\'100%\'></iframe></div>'
    + '<div id=\'chatBtn\' class=\'chatBtn\'></div>'

  }

  this.init = function () {
    var data = {
      accessId: config.accessId,
      location: encodeURIComponent(window.location.host),
      referrer: document.referrer || '',
      callbackF: 'getChatConfig',
      action: 'getOnlineStates'
    }
    this.loadJsonp(config.companyConfigUrl, data)
  }

  this.loadJsonp = function (url, data) {
    var query = utils.makeQuery(data)
    var script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = url + '?' + query
    try {
      document.body.appendChild(script)
    } catch (e) {
      document.ready(function () {
        document.body.appendChild(script)
      })

    }
  }

  this.initChat = function (data, callback) {
    peers = data.peers
    var isClick = false
    if (!data.success) {
      return
    }

    utils.setCookie({accessId: data.accessId})
    var chatdiv = document.createElement('div')
    chatdiv.innerHTML = this.chatboxstyle.html
    document.body.appendChild(chatdiv)
    if (utils.getBroswer() != utils.broswer.IE6 && utils.getBroswer() != utils.broswer.IE7) {
      document.getElementById('qimo_chatpup').getElementsByTagName('iframe')[0].src = config.chatPage + '?v=' + config.version + '&clientId=' + config.clientId + '&urlTitle=' + config.urlTitle + '&fromUrl=' + config.fromUrl + '&serviceStates=' + data.serviceStates + '&accessId=' + data.accessId + '&styleColor=' + data.cssStyle.styleColor + '&peers=' + encodeURIComponent(JSON.stringify(data.peers)) + '&otherParams=' + config.otherParams + '&seoSource=' + encodeURIComponent(seoSource) + '&seoKeywords=' + encodeURIComponent(seoKeywords) + '&companyName=' + encodeURIComponent(config.companyName)
    }
    this.loadStyle()
    var btn = document.getElementById('chatBtn')
    if (!config.autoShow || config.autoShow == 'false') {
      btn.style.right = '-10000px'
      //btn.style.left="1000px";
      btn.style.zIndex = '-100'
      //btn.style.bottom = "30px";
      btn.style.display = 'none'
      isClick = true
    }
    var chatBox = document.getElementById('qimo_chatpup')
    var chatStyle = document.getElementById('chatstyle')
    if (data.cssStyle.styleColor && data.cssStyle.styleColor != undefined && data.cssStyle.styleColor != 'undefined') {
      btn.style.backgroundColor = '#' + data.cssStyle.styleColor
      chatBox.style.borderTopColor = '#' + data.cssStyle.styleColor
      chatBox.style.borderLeftColor = '#' + data.cssStyle.styleColor
      chatBox.style.borderRightColor = '#' + data.cssStyle.styleColor
    }
    if (data.serviceStates == 1) {
      var typeListHtml = ''
      //if(peers.length>1){
      //    if (peers.length > 1) {
      //        typeListHtml = "<ul class='typelist'>";
      //        for (var i = 0; i < peers.length; i++) {
      //            if (i==peers.length-1) {
      //                typeListHtml += "<li index='"+i+"'><p title='"+peers[i].name+"'>"+peers[i].name+"<p><span>▼</span></li></ul>";
      //            }else{
      //                typeListHtml += "<li index='"+i+"'><p title='"+peers[i].name+"'>"+peers[i].name+"</p></li>";
      //            }
      //        }
      //    }
      //}

      if (!data.cssStyle.chatboxLocation) {
        btn.innerHTML = '<img width=\'28px\' height=\'25px\' style=\'margin:0px 5px -6px 0px;\' src=\'' + config.chatHost + 'images/chat.png\'/><span>' + (data.cssStyle.onlineText.trim() == '' ? '咨询客服' : data.cssStyle.onlineText) + '</span>' + typeListHtml
      } else {
        btn.innerHTML = '<img width=\'25px\' height=\'25px\'  src=\'' + config.chatHost + 'images/' + data.cssStyle.chatboxIconType + '.png?1221\'/><span>' + (data.cssStyle.onlineText.trim() == '' ? '咨询客服' : data.cssStyle.onlineText) + '</span>' + typeListHtml
      }
    } else {
      if (!data.cssStyle.chatboxLocation) {
        btn.innerHTML = '<img width=\'28px\' height=\'25px\' style=\'margin:0px 5px -6px 0px;\' src=\'' + config.chatHost + 'images/chat.png\'/><span>' + (data.cssStyle.onlineText.trim() == '' ? '咨询客服' : data.cssStyle.onlineText) + '</span>' + typeListHtml
      } else {
        btn.innerHTML = '<img width=\'25px\' height=\'25px\'  src=\'' + config.chatHost + 'images/' + data.cssStyle.chatboxIconType + '.png?1221\'/><span>' + (data.cssStyle.offlineText.trim() == '' ? '留言联系我们' : data.cssStyle.offlineText) + '</span>'
      }
    }
    utils.chatboxProp.isServiceTime = data.serviceStates
    styleColor = data.cssStyle.styleColor
    if (data.cssStyle.chatboxLocation) {
      var pos = [data.cssStyle.chatboxSideMargin, data.cssStyle.chatboxLocation]
      var chatBox = document.getElementById('qimo_chatpup')
      if (pos[1] == 'left') {
        chatBox.style.left = pos[0] + 'px'
      } else if (pos[1] == 'right') {
        chatBox.style.right = pos[0] + 'px'
      }
    } else {
      chatBox.style.right = '18px'
    }

    utils.eventOn(btn, 'click', this.openChat)
    //if(peers.length == 1){
    //    utils.eventOn(btn, "click", this.openChat);
    //}else if(peers.length > 1){
    //    var items = btn.getElementsByTagName("li");
    //    for(var i=0; i< items.length; i++){
    //        utils.eventOn(items[i], "click", this.openChat);
    //    }
    //
    //}

    if (utils.getBroswer() == utils.broswer.IE6 || utils.getBroswer() == utils.broswer.IE7 || !chatBox.getElementsByTagName('iframe')[0].contentWindow.postMessage) {
      //utils.aniMove(btn, {bottom: 0, b: -btn.offsetHeight}, 15);
      btn.style.display = 'block'
      //btn.style.bottom = "-1px";
    }
    //utils.chatBtnPosition();
    //var bpos = parseFloat(chatBtn.style.bottom.split("px")[0]);
    //chatBtn.style.bottom = -chatBtn.offsetHeight+"px";
    //document.getElementById("custom_color").innerHTML='<style type="text/css">#chatBtn ul.typelist li:hover{background:#'+styleColor+';}#chatBtn ul.typelist li:hover span{color:#'+styleColor+';}</style>';

    //var peer_obj = document.getElementById("chatBtn").getElementsByTagName("li");
    //for (var m = 0; m < peer_obj.length; m++) {
    //    peer_obj[m].onmouseover = function(){
    //        var child_obj = this.getElementsByTagName("span")[0];
    //        this.style.backgroundColor = '#'+styleColor;
    //        child_obj ? child_obj.style.color = '#'+styleColor : null ;
    //    };
    //    peer_obj[m].onmouseout =  function(){
    //        var child_obj = this.getElementsByTagName("span")[0];
    //        this.style.backgroundColor = '#eee';
    //        child_obj ? child_obj.style.color = '#eee' : null ;
    //    };
    //};
    callback(isClick)
  }
  this.loadStyle = function () {
    var style = document.createElement('link')
    style.type = 'text/css'
    style.rel = 'stylesheet'
    if (utils.isFromMobile()) {
      style.href = config.chatHost + '/stylesheets/chatStyle_wap.css?0220'
      var body = document.getElementsByTagName('body')
      body[0].setAttribute('data-7m', '7m_warp')
    } else {
      style.href = config.chatHost + '/stylesheets/chatStyle.css?0710'
    }

    var head = document.getElementsByTagName('head')[0]
    head.appendChild(style)
  }

  this.openChat = function () {
    //console.log(this.getAttribute("index"));
    //if(peers.length == 1){
    //    selectPeer = peers[0].id;
    //}else if(peers.length > 1){
    //    selectPeer = peers[this.getAttribute("index")].id;
    //}

    try {
      if (typeof qimoClientId == 'string' && qimoClientId != 'undefined') {
        config.clientId = encodeURIComponent(qimoClientId)
      }
      if (typeof qimoClientId == 'object') {
        config.clientId = qimoClientId.userId || ''
        config.otherParams = encodeURIComponent(JSON.stringify(qimoClientId))
      }
    } catch (e) {

    }

    var chatBox = document.getElementById('qimo_chatpup')
    var chatBtn = document.getElementById('chatBtn')
    var body = document.getElementsByTagName('body')
    if (body[0].getAttribute('data-7m') === '7m_warp') {
      body[0].setAttribute('data-7m', 'overbody')
      window.scrollTo(0, 0)
    }
    if (utils.isFromMobile()) {
      chatBox.style.left = '-8px'
      chatBox.style.top = '-8px'
    }
    if (utils.chatboxProp.isVisit == 1 && utils.chatboxProp.isChatBoxShow == 0) {
      chatBtn.style.display = 'none'
      chatBox.style.display = 'block'
      utils.aniMove(chatBox, {bottom: -1, b: -chatBox.offsetHeight})
      utils.aniMove(chatBtn, {bottom: -chatBtn.offsetHeight, b: 0})
      return
    }
    if (utils.chatboxProp.isVisit == 1 && utils.chatboxProp.isChatBoxShow == 1) {
      return
    }
    if (utils.getBroswer() != utils.broswer.IE6 && utils.getBroswer() != utils.broswer.IE7) {
      utils.chatboxProp.isVisit = 1
      utils.chatboxProp.isChatBoxShow = 1
      chatBox.style.display = 'block'
      utils.aniMove(chatBox, {bottom: 0, b: -chatBox.offsetHeight})
      if (chatBox.getElementsByTagName('iframe')[0].contentWindow.postMessage) {
        chatBox.getElementsByTagName('iframe')[0].contentWindow.postMessage('qimoClientId_' + (config.clientId || ''), '*')
        chatBox.getElementsByTagName('iframe')[0].contentWindow.postMessage('qimoClientOtherParams_' + (config.otherParams || ''), '*')
        chatBox.getElementsByTagName('iframe')[0].contentWindow.postMessage('selectPeer_' + (selectPeer || ''), '*')
        chatBox.getElementsByTagName('iframe')[0].contentWindow.postMessage('chat_open', '*')
      } else {
        var chatWin = window.open(config.chatPage + '?v=' + config.version + '&clientId=' + (config.clientId || '') + '&urlTitle=' + config.urlTitle + '&fromUrl=' + config.fromUrl + '&serviceStates=' + utils.chatboxProp.isServiceTime + '&newWin=true&accessId=' + config.accessId + '&styleColor=' + styleColor + '&peers=' + encodeURIComponent(JSON.stringify(peers)) + '&peer=' + selectPeer + '&otherParams=' + config.otherParams + '&seoSource=' + encodeURIComponent(seoSource) + '&seoKeywords=' + encodeURIComponent(seoKeywords) + '&companyName=' + encodeURIComponent(config.companyName), 'chatWin', 'width=380px,height=535px,toolbar=no, menubar=no, scrollbars=no, resizable=yes, location=no, status=no')
        chatWin.focus()
      }
      chatBtn.style.display = 'none'
      utils.aniMove(chatBtn, {bottom: -chatBtn.offsetHeight, b: parseFloat(chatBtn.style.bottom.split('px')[0])})
    } else {
      var chatWin = window.open(config.chatPage + '?v=' + config.version + '&clientId=' + (config.clientId || '') + '&urlTitle=' + config.urlTitle + '&fromUrl=' + config.fromUrl + '&serviceStates=' + utils.chatboxProp.isServiceTime + '&newWin=true&accessId=' + config.accessId + '&styleColor=' + styleColor + '&peers=' + encodeURIComponent(JSON.stringify(peers)) + '&peer=' + selectPeer + '&otherParams=' + config.otherParams + '&seoSource=' + encodeURIComponent(seoSource) + '&seoKeywords=' + encodeURIComponent(seoKeywords) + '&companyName=' + encodeURIComponent(config.companyName), 'chatWin', 'width=380px,height=535px,toolbar=no, menubar=no, scrollbars=no, resizable=yes, location=no, status=no')
      if (chatWin) {
        chatWin.focus()
      }

    }

    //通知uba服务器
    if (typeof moorOpenChat == 'function') {
      moorOpenChat()
    }

  }

  this.hideChatBox = function () {
    utils.chatboxProp.isChatBoxShow = 0
    var chatBox = document.getElementById('qimo_chatpup')
    var chatBtn = document.getElementById('chatBtn')
    var body = document.getElementsByTagName('body')
    utils.aniMove(chatBox, {b: 0, bottom: -chatBox.offsetHeight}, null, function () {
      //chatBtn.style.display = "block";
      chatBox.style.display = 'none'
      if (body[0].getAttribute('data-7m') === 'overbody') {
        body[0].setAttribute('data-7m', '7m_warp')
      }
      if (!config.autoShow || config.autoShow == 'false') {
        chatBtn.style.right = '-10000px'
        //btn.style.left="1000px";
        chatBtn.style.zIndex = '-100'
        //btn.style.bottom = "30px";
        chatBtn.style.display = 'none'
      } else {
        chatBtn.style.display = 'block'
        utils.chatBtnPosition()
        var bpos = parseFloat(chatBtn.style.bottom.split('px')[0])
        chatBtn.style.bottom = -chatBtn.offsetHeight + 'px'
        if (utils.isFromMobile()) {
          chatBtn.getElementsByTagName('span')[0].style.display = 'inline'
          chatBtn.style.borderRadius = '0px'
          chatBtn.style.width = '100%'
          chatBtn.style.padding = '10px 0px'
          chatBtn.style.left = '0px'
          utils.aniMove(chatBtn, {bottom: 0, b: -chatBtn.offsetHeight})
        } else {
          utils.aniMove(chatBtn, {bottom: bpos, b: -chatBtn.offsetHeight}, null, function () {

          })
        }

      }

    })

  }

  this.closeChatBox = function () {
    var chatBox = document.getElementById('qimo_chatpup')
    var chatBtn = document.getElementById('chatBtn')
    var body = document.getElementsByTagName('body')
    chatBox.style.bottom = -chatBox.offsetHeight + 'px'
    chatBox.style.display = 'none'
    if (body[0].getAttribute('data-7m') === 'overbody') {
      body[0].setAttribute('data-7m', '7m_warp')
    }
    if (!config.autoShow || config.autoShow == 'false') {
      chatBtn.style.right = '-10000px'
      //btn.style.left="1000px";
      chatBtn.style.zIndex = '-100'
      //btn.style.bottom = "30px";
      chatBtn.style.display = 'none'
    } else {
      chatBtn.style.display = 'block'
      utils.chatBtnPosition()
      var bpos = parseFloat(chatBtn.style.bottom.split('px')[0])
      chatBtn.style.bottom = -chatBtn.offsetHeight + 'px'
      if (utils.isFromMobile()) {
        chatBtn.getElementsByTagName('span')[0].style.display = 'inline'
        chatBtn.style.borderRadius = '0px'
        chatBtn.style.width = '100%'
        chatBtn.style.padding = '10px 0px'
        chatBtn.style.left = '0px'
        utils.aniMove(chatBtn, {bottom: 0, b: -chatBtn.offsetHeight})
      } else {
        utils.aniMove(chatBtn, {bottom: bpos, b: -chatBtn.offsetHeight})
      }

    }
    utils.chatboxProp.isChatBoxShow = 0
    utils.chatboxProp.isVisit = 0
  }

  this.validateEmebedState = function (accessId, location) {
    var data = {
      accessId: accessId,
      location: encodeURIComponent(location),
      action: 'validateEmebedState',
      callbackF: 'validateEmebedState'
    }
    this.loadJsonp(config.companyConfigUrl, data)
  }
  this.videoboxstyle = {
    html: '<div class=\'qimo_videopup\' id=\'qimo_videopup\' style=\'display: none\'>' +
    '<div style=\'\' class=\'dragbar\' id=\'drag\'></div>' +
    '<div class=\'minimg\' id=\'minimg\'><img src=\'' + config.chatHost + 'images/small.png\'></div>' +
    '<img src=\'' + config.chatHost + 'images/big.png\' class=\'maximg\'  id=\'maximg\' style=\'display: none\'></img> ' +
    '<div id=\'mask\'></div>' +
    '<iframe id=\'videoIframe\' src=\'\' height=\'100%\' width=\'100%\'></iframe></div>'
  }

  this.userBehaviorPlaybackInit = function (api, siteId) {
    var el = document.createElement('script')
    el.setAttribute('charset', 'UTF-8')
    el.src = config.chatHost + 'javascripts/clack.min.js' + '?v=' + config.version
    var s = document.getElementsByTagName('script')[0]
    s.parentNode.insertBefore(el, s)
    el.onload = el.onreadystatechange = function () {
      var rec = new clack.Recorder({
        base: window.location.origin,
        url: window.location.href,
        api: api,
        wid: siteId
      })
      document.documentElement.addEventListener('clacksession', function (data) {
        var result = JSON.parse(data.detail)
        var iframe = document.getElementById('qimo_chatpup').getElementsByTagName('iframe')[0]
        iframe.contentWindow.postMessage('userBehaviorVideoId_' + result.session, '*')
      }, false)
      rec.startRecording()
    }
  }

  this.initVideo = function () {
    var videodiv = document.createElement('div')
    videodiv.innerHTML = this.videoboxstyle.html
    document.body.appendChild(videodiv)
    var iframe = document.getElementById('qimo_videopup').getElementsByTagName('iframe')[0]
    var videoDom = document.getElementById('qimo_videopup')
    var dragDom = document.getElementById('drag')
    var minimg = document.getElementById('minimg')
    var maximg = document.getElementById('maximg')
    minimg.addEventListener('click', function () {
      if (self.closeTip) {
        return
      }
      self.mini = true
      minimg.style.display = 'none'
      maximg.style.display = 'block'
      videoDom.style.width = '120px'
      videoDom.style.height = '90px'
      videoDom.style.left = '90%'
      videoDom.style.top = '44%'
      iframe.contentWindow.postMessage('smallMode', '*')
    })
    maximg.addEventListener('click', function () {
      self.mini = false
      minimg.style.display = 'block'
      maximg.style.display = 'none'
      videoDom.style.width = '700px'
      videoDom.style.height = '500px'
      videoDom.style.left = '35%'
      videoDom.style.top = '20%'
      iframe.contentWindow.postMessage('bigMode', '*')
    })
    videoDom.onmouseover = function (e) {
      dragDom.style.display = 'block'
    }
    videoDom.onmouseout = function () {
      dragDom.style.display = 'none'
    }

    this.startDrag(dragDom, videoDom)
  }

  //拖拽的实现
  this.startDrag = function (bar, target, callback) {
    var drawparams = {
      left: 0,
      top: 0,
      currentX: 0,
      currentY: 0,
      flag: false
    }
    var clientWidth = document.body.clientWidth
    var clientHeight = document.body.clientHeight
    //获取相关CSS属性
    var getCss = function (o, key) {
      return o.currentStyle ? o.currentStyle[key] : document.defaultView.getComputedStyle(o, false)[key]
    }
    //o是移动对象
    bar.onmousedown = function (event) {
      if (getCss(target, 'left') !== 'auto') {
        if (getCss(target, 'left') < 1) {
          drawparams.left = getCss(target, 'left') * clientWidth
        } else {
          drawparams.left = getCss(target, 'left')
        }
      }
      if (getCss(target, 'top') !== 'auto') {
        if (getCss(target, 'top') < 1) {
          drawparams.top = getCss(target, 'top') * clientHeight
        } else {
          drawparams.top = getCss(target, 'top')
        }
      }
      document.getElementById('mask').style.display = 'block'
      drawparams.flag = true
      if (!event) {
        event = window.event
        //防止IE文字选中
        bar.onselectstart = function () {
          return false
        }
      }
      var e = event
      drawparams.currentX = e.clientX
      drawparams.currentY = e.clientY
    }
    document.onmouseup = function () {
      document.getElementById('mask').style.display = 'none'
      drawparams.flag = false
    }
    document.onmousemove = function (event) {
      var e = event ? event : window.event
      if (drawparams.flag) {
        var nowX = e.clientX, nowY = e.clientY
        var disX = nowX - drawparams.currentX, disY = nowY - drawparams.currentY
        target.style.left = parseInt(drawparams.left) + disX + 'px'
        target.style.top = parseInt(drawparams.top) + disY + 'px'
      }

      if (typeof callback == 'function') {
        callback(parseInt(drawparams.left) + disX, parseInt(drawparams.top) + disY)
      }
    }
  }
  //打开视频聊天
  this.openVideo = function (videomsg) {
    var videoDom = document.getElementById('qimo_videopup')
    var iframe = document.getElementById('qimo_videopup').getElementsByTagName('iframe')[0]
    videoDom.style.display = 'block'
    var record
    if (videomsg.record == '1') {
      record = true
    } else {
      record = false
    }
    iframe.src = config.videoPage + '?token=' + videomsg.token
      + '&role=1&Username=' + videomsg.kefuname + '&kefuid=' + videomsg.kefuid + '&record=' + record + '&videoSource=' + videomsg.videoSource
  }
  //关闭视频聊天
  this.CloseVideo = function () {
    var videoDom = document.getElementById('qimo_videopup')
    var iframe = document.getElementById('qimo_videopup').getElementsByTagName('iframe')[0]
    var minimg = document.getElementById('minimg')
    var maximg = document.getElementById('maximg')
    minimg.style.display = 'block'
    maximg.style.display = 'none'
    videoDom.style.display = 'none'
    videoDom.style.width = '700px'
    videoDom.style.height = '500px'
    videoDom.style.left = '35%'
    videoDom.style.top = '20%'
    this.mini = false
    iframe.src = ''
  }
};

(function (doc) {
  var loaded = false

  function getMsgFromChildFrame (b) {
    var data = b.data
    var source = b.source
    var origin = b.origin
    var chatIframe = document.getElementById('qimo_chatpup').getElementsByTagName('iframe')[0].contentWindow
    if (document.getElementById('qimo_videopup')) {
      var videoIframe = document.getElementById('qimo_videopup').getElementsByTagName('iframe')[0].contentWindow
    }
    if (b.data == 'hideChatBox') {
      qimosdk.hideChatBox()
    }

    if (b.data == 'closeChatBox') {
      qimosdk.closeChatBox()
    }

    if (b.data == 'loadSocketJs') {
      loaded = true
      var btn = document.getElementById('chatBtn')
      var bpos = utils.chatBtnPosition()
      if (btn.style.bottom == '') {
        utils.aniMove(btn, {bottom: 0, b: -btn.offsetHeight}, 15)
        if (utils.isFromMobile()) {
          btn.style.borderRadius = '0px'
          btn.style.padding = '10px 0px'
        }
      } else {
        btn.style.bottom = -btn.offsetHeight + 'px'
        if (utils.isFromMobile()) {
          utils.aniMove(btn, {bottom: -1, b: -btn.offsetHeight}, 15)
          btn.getElementsByTagName('span')[0].style.display = 'inline'
          btn.getElementsByTagName('span')[0].style.paddingBottom = '5px'
          btn.style.borderRadius = '0px'
          btn.style.padding = '10px 0px'
          btn.style.width = '100%'
          btn.style.left = '0px'
        } else {
          utils.aniMove(btn, {bottom: parseFloat(bpos.bottom.split('px')[0]), b: -btn.offsetHeight}, 15)
        }
      }

    }
    if (b.data == 'AutoOpenChatBox') {
      if (onlineData.autoInvite == '1') {
        qimosdk.openChat()
      }
    }
    if (b.data == 'openChatBox') {
      qimosdk.openChat()
    }
    if (b.data == 'newMsg') {
      message.show()
    }
    if (typeof b.data === 'string' && b.data.indexOf('userBehaviorReplayData') > -1) {
      var userBehaviorReplayData = JSON.parse(b.data).userBehaviorReplayData
      qimosdk.userBehaviorPlaybackInit(userBehaviorReplayData.clackApiUrl, userBehaviorReplayData.siteId)
    }
    //打开视频
    if (typeof b.data === 'string' && b.data.indexOf('openVideoBox') != -1) {
      var videomsg = JSON.parse(b.data.substring('openVideoBox'.length))
      qimosdk.openVideo(videomsg)
    }
    //访客点击关闭对话，提示是否结束聊天
    if (b.data == 'wantCloseChat') {
      if (qimosdk.mini) {
        var videoDom = document.getElementById('qimo_videopup')
        var minimg = document.getElementById('minimg')
        var maximg = document.getElementById('maximg')
        minimg.style.display = 'block'
        maximg.style.display = 'none'
        videoDom.style.width = '700px'
        videoDom.style.height = '500px'
        videoDom.style.left = '35%'
        videoDom.style.top = '20%'
        videoIframe.postMessage('bigMode', '*')
      }
      qimosdk.closeTip = true
      videoIframe.postMessage('wantCloseChat', '*')
    }
    //确认结束视频聊天
    if (b.data == 'confirmCloseChat') {
      chatIframe.postMessage('confirmCloseChat', '*')
    }
    //取消结束视频聊天
    if (b.data == 'cancelCloseChat') {
      qimosdk.closeTip = false
    }
    //视频聊天关闭视频窗口
    if (typeof b.data === 'string' && (b.data.indexOf('UserHangup') !== -1 || b.data == 'UserCancel' || b.data == 'beRefused' || b.data == 'beHanguped')) {
      qimosdk.CloseVideo()
    }
    //具体关闭情况
    if (b.data == 'UserHangup') {
      //聊天过程中主动挂机
      chatIframe.postMessage('UserHangup', '*')
    }
    if (b.data == 'UserCancel') {
      //等待过程中主动取消
      chatIframe.postMessage('UserCancel', '*')
    }
    if (typeof b.data === 'string' && b.data.indexOf('notSupport') !== -1) {
      qimosdk.CloseVideo()
      //硬件不支持，直接拒绝
      chatIframe.postMessage('notSupport' + b.data.substring('notSupport'.length), '*')
    }
    if (typeof b.data === 'string' && b.data.indexOf('lostConnect') !== -1) {
      qimosdk.CloseVideo()
      chatIframe.postMessage('lostConnect' + b.data.substring('lostConnect'.length), '*')
    }
  }

  if (window.addEventListener) {
    window.addEventListener('message', getMsgFromChildFrame)
  } else {
    window.attachEvent('onmessage', getMsgFromChildFrame)
  }

  var qimosdk = new QiMoIMSDK()
  //window.getChatConfig = function (c) {
  //c.serviceStates = 0; //test
  qimosdk.initChat(onlineData, function (data) {
    if (data) {
      window.qimoChatClick = function () {
        if (loaded) {
          qimosdk.openChat()
        } else {
          alert('页面尚未加载完，请稍后点击咨询')
        }

      }
    }
    if (!onlineData.haveAuthrizedCheck) {
      qimosdk.validateEmebedState(config.accessId, config.location)
    }
  })
  qimosdk.initVideo()
  //};
  //qimosdk.init();

  window.validateEmebedState = function (data) {

  }

  //doc.onmousedown = dragDiv.doDown;
  //doc.onmouseup   = dragDiv.doUp;
  //doc.onmousemove = dragDiv.doMove;
})(document)
