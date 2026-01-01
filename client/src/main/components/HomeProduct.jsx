import ProductCard from "./ProductCard";
import PromoCard from "./PromoCard";

export default function HomeProduct() {
    return (
        <div className="space-y-10">
            <Section
                title="Deals and offers"
                promo={{
                    title: "Deals and offers",
                    subtitle: "Hygiene equipments",
                    timer: ["04", "13", "34", "56"],
                }}
            />

            <Section
                title="Home and outdoor products"
                promo={{
                    title: "Home and outdoor products",
                    button: "Explore now",
                    image: "/promo-home.jpg",
                }}
            />

            <Section
                title="Consumer electronics and gadgets"
                promo={{
                    title: "Consumer electronics and gadgets",
                    button: "Explore now",
                    image: "/promo-electronics.jpg",
                }}
            />
        </div>
    );
}
