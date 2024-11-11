const Price = ({ name, stock = 'yes', amount }) => {
    return (
        <div className="flex items-center justify-between">
            <p className="grid-headtext">{name}</p>
            {stock == 'yes' ? (
                <p className="price_tag text-green-600">{amount}€</p>
            ) : stock == 'soon' ? (
                <p className="price_tag text-blue-600 glow_blue">Arrive bientôt</p>
            ) : (
                <p className="price_tag glow">Rupture de stock</p>
            )}
        </div>
    );
};

export default Price;