var EventUtil = {

    //////////////////////// 이벤트 등록/해제
    // 이벤트를 등록
    addHandler: function(element, type, handler){
        if (element.addEventListener){
            element.addEventListener(type, handler, false);
        } else if (element.attachEvent){
            element.attachEvent("on" + type, handler);
        } else {
            element["on" + type] = handler;
        }
    },

    // 이벤트를 삭제
    removeHandler: function(element, type, handler){
        if (element.removeEventListener){
            element.removeEventListener(type, handler, false);
        } else if (element.detachEvent){
            element.detachEvent("on" + type, handler);
        } else {
            element["on" + type] = null;
        }
    },

    //////////////////////// 이벤트 조작
    // 기본 조작을 하지 않는다
    preventDefault: function(event){
        if (event.preventDefault){
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    },

    getEvent: function(event){
        return event ? event : window.event;
    },

    // 이벤트 흐름을 즉시 멈춤
    // 이벤트 캡처링이나 버블링을 모두 취소
    stopPropagation: function(event){
        if (event.stopPropagation){
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    },
    
    getTarget: function(event){
        return event.target || event.srcElement;
    },
    
    /**
     * @event : "mousemover", "mouseout"
     * 관련 요소를 반환 (해당 이벤트의 근접 반환)
     * 이걸 어따 쓰냐?
     */
    getRelatedTarget: function(event){
        if (event.relatedTarget){
            return event.relatedTarget;
        } else if (event.toElement){
            return event.toElement;
        } else if (event.fromElement){
            return event.fromElement;
        } else {
            return null;
        }
    
    },
    
    /**
     * @event : mousedown, mouseup
     * @return
     * 0 : 왼쪽 마우스 버튼 클릭
     * 1 : 오른쪽 마우스 버튼 클릭
     * 2 : 가운데 마우스 버튼 클릭
     */
    getButton: function(event){
        if (document.implementation.hasFeature("MouseEvents", "2.0")){
            return event.button;
        } else {
            switch(event.button){
                case 0:
                case 1:
                case 3:
                case 5:
                case 7:
                    return 0;
                case 2:
                case 6:
                    return 2;
                case 4: return 1;
            }
        }
    },
    
    /**
     * @Event : "keydown", "keyup", "keypress"
     * 눌려진 키를 반환
     */
    getCharCode: function(event){
        if (typeof event.charCode == "number"){
            if( event.charCode == 0 ){
                return event.which;
            }
            return event.charCode;
        } else {
            return event.keyCode;
        }
    },

    /**
     * 마우스 휠 방향 값
     * @event : "mousewheel", "DOMMouseScroll"
     */
    getWheelDelta: function(event){
        if (event.wheelDelta){
            return (client.engine.opera && client.engine.opera < 9.5 ? -event.wheelDelta : event.wheelDelta);
        } else {
            return -event.detail * 40;
        }
    },

    /**
     * @event : "beforecopy", "copy", "beforecut", "cut", "beforepaste", "paste"
     * 클립보드 이벤트 문자열 반환
     */
    getClipboardText: function(event){
        var clipboardData =  (event.clipboardData || window.clipboardData);
        return clipboardData.getData("text");
    },
    
    /**
     * @event : "beforecopy", "copy", "beforecut", "cut", "beforepaste", "paste"
     * 클립보드 이벤트 문자열 반환
     */
    setClipboardText: function(event, value){
        if (event.clipboardData){
            event.clipboardData.setData("text/plain", value);
        } else if (window.clipboardData){
            window.clipboardData.setData("text", value);
        }
    }
};