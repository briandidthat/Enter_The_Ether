const charge = {
    makeCharge(token, tier) {
      return postWithToken(`payment/make`, { token: token, tier: tier });
    },
    getTier() {
      return getWithToken(`payment/current_tier`, {});
    },
    getTiers() {
      return get(`payment/tiers`, {});
    }
};

export default charge;