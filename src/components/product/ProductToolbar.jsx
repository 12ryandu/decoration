import "./ProductToolbar.css";

export default function ProductToolbar({
                                           title,
                                           total,
                                           sortValue,
                                           onSortChange,
                                       }) {
    return (
        <div className="product-toolbar">
            <div>
                <h2 className="product-toolbar__title">{title}</h2>
                <p className="product-toolbar__count">{total} products</p>
            </div>

            <div className="product-toolbar__controls">
                <label>
                    Sort by
                    <select value={sortValue} onChange={(e) => onSortChange(e.target.value)}>
                        <option value="default">Default</option>
                        <option value="newest">Newest</option>
                        <option value="name-asc">Name A-Z</option>
                        <option value="name-desc">Name Z-A</option>
                    </select>
                </label>
            </div>
        </div>
    );
}