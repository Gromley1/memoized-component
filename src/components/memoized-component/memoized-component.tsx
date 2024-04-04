import { ReactElement, memo, useState } from 'react';
import { propsEqual } from '../../utils';

interface IMemoizedComponentProps {
    propOne: boolean;
    propTwo: string;
    propThree: number;
}

function RenderMemoizedComponent(_props: IMemoizedComponentProps): ReactElement {
    return (
        <> 
        <div style={{ 'display': 'flex', 'flexDirection': 'column', 'gap': '2rem' }}>
            Memoized Component Rendered at {new Date().toLocaleTimeString()} 
        </div>
        </>
    );
}

export const MemoizedComponent = memo(RenderMemoizedComponent, propsEqual)