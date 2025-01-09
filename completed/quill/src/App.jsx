import { useRef, useState } from 'react';
import Editor from './Editor';

import { parseContentToQuill } from '../../../scripts/parseContentToQuill';

const App = () => {
    const [range, setRange] = useState();
    const [lastChange, setLastChange] = useState();
    const [readOnly, setReadOnly] = useState(false);

    // Use a ref to access the quill instance directly
    const quillRef = useRef();

    const value = parseContentToQuill();
    return (
        <div>
            <Editor
                ref={quillRef}
                readOnly={readOnly}
                defaultValue={value}
                onSelectionChange={setRange}
                onTextChange={setLastChange}
            />
            <div className="controls">
                <label>
                    Read Only:{' '}
                    <input
                        type="checkbox"
                        value={readOnly}
                        onChange={(e) => setReadOnly(e.target.checked)}
                    />
                </label>
                <button
                    className="controls-right"
                    type="button"
                    onClick={() => {
                        alert(quillRef.current?.getLength());
                    }}
                >
                    Get Content Length
                </button>
            </div>
            <div className="state">
                <div className="state-title">Current Range:</div>
                {range ? JSON.stringify(range) : 'Empty'}
            </div>
            <div className="state">
                <div className="state-title">Last Change:</div>
                {lastChange ? JSON.stringify(lastChange.ops) : 'Empty'}
            </div>
        </div>
    );
};

export default App;