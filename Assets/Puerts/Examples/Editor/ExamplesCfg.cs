/*
 * Tencent is pleased to support the open source community by making InjectFix available.
 * Copyright (C) 2019 THL A29 Limited, a Tencent company.  All rights reserved.
 * InjectFix is licensed under the MIT License, except for the third-party components listed in the file 'LICENSE' which may be subject to their corresponding license terms. 
 * This file is subject to the terms and conditions defined in file 'LICENSE', which is part of this source code package.
 */

using System.Collections.Generic;
using Puerts;
using System;
using System.Linq;
using System.Reflection;
using System.Reflection.Emit;
using AssetBundles;
using TMPro;
using UnityEngine;
using UnityEngine.Events;
using UnityEngine.EventSystems;
using UnityEngine.SceneManagement;
using UnityEngine.UI;
using Logger = Common.Logger;
using Object = UnityEngine.Object;

//1、配置类必须打[Configure]标签
//2、必须放Editor目录
[Configure]
public class ExamplesCfg
{
    [Binding]
    static IEnumerable<Type> Bindings
    {
        get
        {
                        var list = new List<Type>()
            {
                typeof(Debug),
                typeof(Vector3),
                typeof(Vector2),
                typeof(List<int>),
                //typeof(Dictionary<string, int>),
                typeof(Time),
                typeof(Transform),
                typeof(Component),
                typeof(GameObject),
                typeof(Object),
                typeof(Delegate),
                typeof(System.Object),
                typeof(Type),
                typeof(ParticleSystem),
                typeof(Canvas),
                typeof(CanvasGroup),
                typeof(RenderMode),
                typeof(Behaviour),
                typeof(MonoBehaviour),

                typeof(RectTransform),
                typeof(UIBehaviour),
                typeof(Selectable),
                typeof(Button),
                typeof(Button.ButtonClickedEvent),
                typeof(UnityEvent),
                typeof(InputField),
                typeof(Slider),
                typeof(Toggle),
                typeof(Toggle.ToggleEvent),
                typeof(ScrollRect),
                typeof(CanvasScaler),
                typeof(GraphicRaycaster),
                typeof(UnityEvent<bool>),
                typeof(Resources),
                typeof(Application),
                typeof(TextAsset),
                typeof(TMP_Text),
                typeof(Text),
                typeof(Image),
                typeof(MonoSingleton<AssetBundleManager>),
                typeof(PlayerPrefs),

                typeof(SceneManager),
                typeof(Scene),
                typeof(LoadSceneMode),
                typeof(AsyncOperation),

                typeof(PuertsManager),
                typeof(GameLaunch),
                typeof(Logger),
                typeof(AssetBundleManager),
                typeof(BaseLoader),
                typeof(BaseAssetRequester),
                typeof(BaseAssetAsyncLoader),
                typeof(BaseAssetBundleAsyncLoader),
            };

            List<string> namespaces = new List<string>()
            {
                "DG.Tweening"
            };

            Assembly[] ass = AppDomain.CurrentDomain.GetAssemblies();
            list.AddRange((from assembly in ass
                where !(assembly.ManifestModule is ModuleBuilder)
                from type in assembly.GetExportedTypes()
                where type.Namespace != null && namespaces.Contains(type.Namespace)
                      && type.BaseType != typeof(MulticastDelegate) && !type.IsEnum
                select type));
            return list;
        }
    }

    [BlittableCopy]
    static IEnumerable<Type> Blittables
    {
        get
        {
            return new List<Type>()
            {
                //打开这个可以优化Vector3的GC，但需要开启unsafe编译
                //typeof(Vector3),
            };
        }
    }
    
    [Filter]
    static bool FilterMethods(System.Reflection.MemberInfo mb)
    {
        // 排除 MonoBehaviour.runInEditMode, 在 Editor 环境下可用发布后不存在
        if (mb.DeclaringType == typeof(MonoBehaviour) && mb.Name == "runInEditMode") {
            return true;
        }
        return false;
    }
}
