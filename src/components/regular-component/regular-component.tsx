import { ReactElement } from 'react';

interface IRegularComponentProps {
    propOne: boolean;
    propTwo: string;
    propThree: number;
}

export const RegularComponent = (_props: IRegularComponentProps): ReactElement => {

    return <> Regular Component Rendered at {new Date().toLocaleTimeString()} </>;
}
