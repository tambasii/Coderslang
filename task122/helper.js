export const getLesserEvil = (threat1, threat2, threat3) => {
  if (threat1.evilFactor < threat2.evilFactor) {
    return threat1;
  } else if (threat2.evilFactor < threat1.evilFactor) {
    return threat2;
  } else return threat3;
};
