import { vido, ComponentInstance, lithtml, Component } from './vido.d';
export declare type SlotInstances = {
    [key: string]: ComponentInstance[];
};
export interface SlotStorage {
    [key: string]: Component[];
}
export declare class Slots {
    private slotInstances;
    private vido;
    private destroyed;
    private props;
    constructor(vido: vido<unknown, unknown>, props: unknown);
    setComponents(slots: SlotStorage): void;
    destroy(): void;
    change(changedProps: unknown, options?: any): void;
    getInstances(placement: string | undefined): ComponentInstance[] | SlotInstances;
    html(placement: string, templateProps?: unknown): lithtml.TemplateResult[] | undefined;
    getProps(): unknown;
    isDestroyed(): boolean;
}
//# sourceMappingURL=Slots.d.ts.map