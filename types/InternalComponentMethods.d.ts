export default function getInternalComponentMethods(components: any, actionsByInstance: any, clone: any): {
    new (instance: string, vidoInstance: any, renderFunction: any, content: any): {
        instance: string;
        vidoInstance: any;
        renderFunction: (changedProps: any) => void;
        content: any;
        destroyed: boolean;
        destroy(): void;
        update(props?: {}): void;
        change(changedProps: any, options?: {
            leave: boolean;
        }): void;
    };
};