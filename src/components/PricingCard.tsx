
import './PricingCard.css';

const PricingCard = () => {
  return (
    <div className="pricing-card">
      <div className="pricing-card-header">
        <div className="pricing-card-title">
          <h3>Estimated Monthly Price*</h3>
          <a href="#">View details</a>
        </div>
        <div className="pricing-card-price">
          <span>$99.99</span>
        </div>
      </div>

      <button className="create-service-btn">
        <span className="plus-icon">+</span>
        Create service
      </button>
    </div>
  );
};

export default PricingCard;
