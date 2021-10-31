import React from 'react';

const Toolbar = ({filters, selected, onSelectFilter}) => {

    return (
        <div className="toolbar">
            {filters.map(filter => {
                return(
                    <button 
                        className={filter === selected 
                            ? "toolbar-button selected" 
                            : "toolbar-button"} 
                        key={filter}
                        onClick={() => onSelectFilter(filter)}
                    >
                        {filter}
                    </button>
                )
            })}
        </div>
    );
}

export default Toolbar;
