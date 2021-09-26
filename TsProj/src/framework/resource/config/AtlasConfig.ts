let comm: IAtlasConfig = {
    name: "comm",
    atlasPath: "ui/atlas/comm/",
};

let base: IAtlasConfig = {
    name: "base",
    atlasPath: "ui/atlas/base/",
};

/**
 * 图集配置
 */
let AtlasConfig = {
    Comm: comm,
    Base: base,
};

/**
 * 图集类型接口
 */
export interface IAtlasConfig {
    name: string;
    atlasPath: string;
}

export {AtlasConfig}