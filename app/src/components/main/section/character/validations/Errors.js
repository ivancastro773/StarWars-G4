export default function errorHandle(errors) {
    return {
      name() {
        return errors.name && <div className="required-validation">{errors.name}</div>;
      },
      height() {
        return errors.height && <div className="required-validation">{errors.height}</div>;
      },
  
      mass() {
        return errors.mass && <div className="required-validation">{errors.mass}</div>;
      },
      hair_color() {
        return errors.hair_color && <div className="required-validation">{errors.hair_color}</div>;
      },
      skin_color() {
        return errors.skin_color && <div className="required-validation">{errors.skin_color}</div>;
      },
      eye_color() {
        return errors.eye_color && <div className="required-validation">{errors.eye_color}</div>;
      },
      birth_year() {
        return errors.birth_year && <div className="required-validation">{errors.birth_year}</div>;
      },
      gender() {
        return errors.gender && <div className="required-validation">{errors.gender}</div>;
      },
    };
  }