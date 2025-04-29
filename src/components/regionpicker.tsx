import { useState } from "react";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";

export const RegionPicker = () => {
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");

  const onChangeCountry = (val: string) => {
    setCountry(val);
    if (!val) {
      setRegion("");
    }
  };

  return (
    <>
      <CountryDropdown
        value={country}
        onChange={onChangeCountry}
        className="outline-none appearance-none max-w-[90px] sm:max-w-[120px]"
        defaultOptionLabel="Country"
      />

      <RegionDropdown
        country={country}
        value={region}
        onChange={(val) => setRegion(val)}
        className="outline-none show-arrow bg-yellow-500 max-w-[80px] sm:max-w-[100px]"
        defaultOptionLabel=""
        blankOptionLabel=""
      />
    </>
  );
};
