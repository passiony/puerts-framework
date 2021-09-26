/**
 * 基础组件容器
 */
import {IUIBaseComponentCtor, UIBaseComponent} from "./UIBaseComponent";
import Handler from "../../utils/Handler";
import {IUIComponent} from "../../interface/IUIComponent";

export class UIBaseContainer extends UIBaseComponent {
    /**
     * 所有组件 【key：相对路径，value：组件列表】
     */
    private _components: Map<string, Map<IUIBaseComponentCtor, IUIComponent>>;
    /**
     * 子节点数量
     */
    private _length: number;

    onCreate(): void {
        super.onCreate();
        this._components = new Map<string, Map<IUIBaseComponentCtor, IUIComponent>>();
        this._length = 0;
    }

    onDestroy(): void {
        let handler: Handler = Handler.create(this, (component: UIBaseComponent) => {
            component.destroy();
        }, null, false);
        this.walk(handler);
        handler.recover();


        this._components = null;
        super.onDestroy();
    }

    onEnable(): void {
        super.onEnable();
        let handler: Handler = Handler.create(this, (component: UIBaseComponent) => {
            component.onEnable();
        }, null, false);
        this.walk(handler);
        handler.recover();
    }

    onDisable(): void {
        super.onDisable();
        let handler: Handler = Handler.create(this, (component: UIBaseComponent) => {
            component.onDisable();
        }, null, false);
        this.walk(handler);
        handler.recover();
    }

    /**
     * 遍历所有组件：component_class参数不传，遍历某个Container下指定组件传入对应类型
     * @param callback
     * @param component_class
     */
    walk(callback: Handler, component_class?: IUIBaseComponentCtor) {
        this._components.forEach((component_map: Map<IUIBaseComponentCtor, IUIComponent>) => {
            if (component_map != null) {
                component_map.forEach((component: IUIComponent, cmp_class: IUIBaseComponentCtor) => {
                    if (component_class == null) {
                        callback.runWith(component);
                    } else if (cmp_class == component_class) {
                        callback.runWith(component);
                    }
                });
            }
        });
    }

    /**
     * 添加组件
     * @param component_class
     * @param relativePath
     * @param params
     */
    addComponent<T extends IUIComponent>(component_class: IUIBaseComponentCtor, relativePath: string, params?: any[]): T {
        let component_inst: IUIComponent = new component_class(this._transform, relativePath);
        component_inst.onCreate.apply(component_inst, params);
        this.recordComponent(relativePath, component_class, component_inst);
        this._length++;
        return component_inst as T;
    }

    /**
     * 获取单个组件，如果没有传入类类型，返回这个名字的第一个组件
     * @param relativePath
     * @param component_class
     */
    getComponent(relativePath: string, component_class: IUIBaseComponentCtor): IUIComponent {
        if (relativePath == null || component_class == null) {
            console.error(this.constructor.name + "::getComponent function args error");
            return null;
        }
        if (!this._components.has(relativePath)) {
            return null;
        }
        let cMap = this._components.get(relativePath);
        return cMap.get(component_class);
    }

    /**
     * 获取所有类型组件
     * @param component_class
     */
    getComponents(component_class: IUIBaseComponentCtor) {
        let components = new Array<IUIComponent>();
        this.walk(Handler.create(this, (component) => {
            components.push(component);
        }, null, false), component_class);
        return components;
    }

    /**
     * 移除组件
     * @param relativePath 相对路径
     * @param component_class 类型
     */
    removeComponent(relativePath: string, component_class: IUIBaseComponentCtor): IUIComponent {
        let component = this.getComponent(relativePath, component_class);
        if (component != null) {
            this._components.get(relativePath).delete(component_class);
            component.destroy();
            this._length--;
        }
        return component;
    }

    /**
     * 移除组件
     * @param component_class
     */
    removeComponents(component_class: IUIBaseComponentCtor): Array<IUIComponent> {
        let components = this.getComponents(component_class);
        for (let i = 0; i < components.length; i++) {
            let component = components[i];
            this._components.get(component.getRelativePath()).delete(component_class);
            component.destroy();
            this._length--;
        }
        return components;
    }

    /**
     * 记录组件
     * @param relativePath
     * @param component_class
     * @param component
     */
    private recordComponent<T extends IUIComponent>(relativePath: string, component_class: IUIBaseComponentCtor, component: T) {
        let componentsMap: Map<IUIBaseComponentCtor, IUIComponent> = this._components.get(relativePath);
        if (componentsMap == null) {
            componentsMap = new Map<IUIBaseComponentCtor, IUIComponent>();
            componentsMap.set(component_class, component);
            this._components.set(relativePath, componentsMap);
            return;
        }
        if (componentsMap.has(component_class)) {
            console.error(`can not repeat add component,name:【${component_class.name}】 ,relativePath:【${relativePath}】`);
            return;
        }
        componentsMap.set(component_class, component);
    }
}