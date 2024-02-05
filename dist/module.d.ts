import * as _nuxt_schema from '@nuxt/schema';

interface ModuleOptions {
    serverHandler?: {
        getSession?: ServerHandlerOption;
        deleteSession?: ServerHandlerOption;
    };
}
interface ServerHandlerOption {
    route: string;
    method: "get" | "head" | "patch" | "post" | "put" | "delete" | "connect" | "options" | "trace";
}
declare const _default: _nuxt_schema.NuxtModule<ModuleOptions>;

export { type ModuleOptions, type ServerHandlerOption, _default as default };
