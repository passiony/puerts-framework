using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Events;
using UnityEngine.EventSystems;

namespace Common
{
    /// <summary>
    /// UI的按下和抬起事件
    /// </summary>
    public class UiPointerDownUp : MonoBehaviour,IPointerDownHandler,IPointerUpHandler
    {
        public UIPointerEvent onPressDown = new UIPointerEvent();
        public UIPointerEvent onPressUp = new UIPointerEvent();

        public void OnPointerDown(PointerEventData eventData)
        {
            onPressDown.Invoke(eventData);
        }

        public void OnPointerUp(PointerEventData eventData)
        {
            onPressUp.Invoke(eventData);
        }
    }

    [System.Serializable]
    public class UIPointerEvent : UnityEvent<PointerEventData> { }
}