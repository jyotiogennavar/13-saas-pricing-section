import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";

const PricingSection = () => {
  const [selected, setSelected] = useState("M");

  return (
    <Wrapper>
      <Heading selected={selected} setSelected={setSelected} />
      <PriceCards selected={selected} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  color: black;
  background-color: white;
  padding: 1rem 1.5rem;

  font-family: "Inter", sans-serif;

  @media (min-width: 768px) {
    padding: 2rem 6rem;
  }

  position: relative;
  overflow: hidden;
`;

const selectedStyles = {
  color: "white",
  fontWeight: 500,
  borderRadius: "0.375rem",
  paddingTop: "0.75rem",
  paddingBottom: "0.75rem",
  width: "7rem",
  position: "relative",
  border: "none",
  backgroundColor: "transparent",
};

const deselectedStyles = {
  fontWeight: 500,
  borderRadius: "0.375rem",
  paddingTop: "0.75rem",
  paddingBottom: "0.75rem",
  width: "7rem",
  position: "relative",
  transition: "background-color 0.3s",
  border: "none",
  backgroundColor: "transparent",
};

const Heading = ({ selected, setSelected }) => {
  return (
    <HeadingWrapper>
      <h3>Pricing plans</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur. Pulvinar eu rhoncus tincidunt
        eget mattis netus ridiculus.
      </p>

      <ToggleBtns>
        <button
          onClick={() => setSelected("M")}
          style={selected === "M" ? selectedStyles : deselectedStyles}
        >
          Monthly
          {selected === "M" && <BackgroundShift />}
        </button>
        <Relative>
          <button
            onClick={() => setSelected("A")}
            style={selected === "A" ? selectedStyles : deselectedStyles}
          >
            Annually
            {selected === "A" && <BackgroundShift />}
          </button>
          <CTAArrow />
        </Relative>
      </ToggleBtns>
    </HeadingWrapper>
  );
};

const HeadingWrapper = styled.div`
  position: relative;
  z-index: 10;
  max-width: 30rem;

  margin: 0 auto 5rem auto;
  text-align: center;

  h3 {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.125rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 768px) {
    margin-bottom: 5rem;

    h3 {
      font-size: 2rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;

const Relative = styled.div`
  position: relative;
`;
const BackgroundShift = styled(motion.span)`
  position: absolute;
  inset: 0;
  background-color: #000;
  border-radius: 0.375rem;
  z-index: -1;
`;

const ToggleBtns = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;

  button {
  }
`;

const CTAArrow = () => (
  <SvgWrapper>
    <motion.svg
      width="95"
      height="62"
      viewBox="0 0 95 62"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="scale-50 sm:scale-75"
      initial={{ scale: 0.7, rotate: 5 }}
      animate={{ scale: 0.75, rotate: 0 }}
      transition={{
        repeat: Infinity,
        repeatType: "mirror",
        duration: 1,
        ease: "easeOut",
      }}
    >
      <path
        d="M14.7705 15.8619C33.2146 15.2843 72.0772 22.1597 79.9754 54.2825"
        stroke="#7D7BE5"
        strokeWidth="3"
      />
      <path
        d="M17.7987 7.81217C18.0393 11.5987 16.4421 15.8467 15.5055 19.282C15.2179 20.3369 14.9203 21.3791 14.5871 22.4078C14.4728 22.7608 14.074 22.8153 13.9187 23.136C13.5641 23.8683 12.0906 22.7958 11.7114 22.5416C8.63713 20.4812 5.49156 18.3863 2.58664 15.9321C1.05261 14.6361 2.32549 14.1125 3.42136 13.0646C4.37585 12.152 5.13317 11.3811 6.22467 10.7447C8.97946 9.13838 12.7454 8.32946 15.8379 8.01289"
        stroke="#7D7BE5"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </motion.svg>
    <span className="block text-xs w-fit bg-indigo-500 text-white shadow px-1.5 py-0.5 rounded -mt-1 ml-8 -rotate-2 font-light italic">
      Save 20%
    </span>
  </SvgWrapper>
);

const SvgWrapper = styled.div`
  position: absolute;
  right: -100px;
  top: 2px;

  svg {
    transform-origin: center;
  }

  span {
    display: block;
    font-size: 0.75rem;
    background-color: #7d7be5;
    color: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 0.5rem 0.75rem;
    border-radius: 0.25rem;
    margin-left: 0.5rem;
    transform: rotate(-2deg);
    font-style: italic;
  }
  @media (max-width: 640px) {
    right: -34px;
    top: 31px;

    span {
      padding: 0.25rem 0.5rem;
      
    }
  }
`;

// Pricing Cards
const PriceCards = ({ selected }) => {
  const features = [
    [
      { text: "10,000 requests/month" },
      { text: "Basic in app support" },
      { text: "2 users on your account" },
      { text: "1 workspace" },
    ],
    [
      { text: "20,000 requests/month" },
      { text: "Priority support" },
      { text: "5 users on your account" },
      { text: "3 workspaces" },
    ],
    [
      { text: "50,000 requests/month" },
      { text: "Priority support" },
      { text: "10 users on your account" },
      { text: "5 workspaces" },
    ],
  ];

  return (
    <PriceCardsContainer>
      {/* FREE */}
      <PriceCard>
        <PriceCardTitle>Free</PriceCardTitle>
        <PriceCardText>Everything to start</PriceCardText>
        <PriceAmount>
          $0<span>/month</span>
        </PriceAmount>
        <PriceFeatures>
          {features[0].map((feature, index) => (
            <FeatureItem key={index}>
              <svg
                width="20"
                height="15"
                viewBox="0 0 20 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="shrink-0"
              >
                <path
                  d="M6.35588 11.8345L1.61455 7.17002L0 8.7472L6.35588 15L20 1.57718L18.3968 0L6.35588 11.8345Z"
                  fill="black"
                />
              </svg>
              {feature.text}
            </FeatureItem>
          ))}
        </PriceFeatures>
        <StyledButton whileHover={{ scale: 1.015 }} whileTap={{ scale: 0.985 }}>
          Sign up free
        </StyledButton>
      </PriceCard>

      {/* PRO */}
      <PriceCard>
        <PriceCardTitle>Professional</PriceCardTitle>
        <PriceCardText>Everything to launch</PriceCardText>

        <AnimatePresence>
          {selected === "M" ? (
            <PriceContainer>
              <PriceText
                key="monthly1"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
              >
                <span>$49</span>
                <span style={{ fontSize: "1.5rem" }}>/month</span>
              </PriceText>
            </PriceContainer>
          ) : (
            <PriceContainer>
              <PriceText
                key="monthly2"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
              >
                <span>$39</span>
                <span style={{ fontSize: "1.5rem" }}>/month</span>
              </PriceText>
            </PriceContainer>
          )}
        </AnimatePresence>

        <PriceFeatures>
          {features[1].map((feature, index) => (
            <FeatureItem key={index}>
              <svg
                width="20"
                height="15"
                viewBox="0 0 20 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="shrink-0"
              >
                <path
                  d="M6.35588 11.8345L1.61455 7.17002L0 8.7472L6.35588 15L20 1.57718L18.3968 0L6.35588 11.8345Z"
                  fill="black"
                />
              </svg>
              {feature.text}
            </FeatureItem>
          ))}
        </PriceFeatures>
        <StyledButton
          style={{ backgroundColor: "#4f46e5" }}
          whileHover={{ scale: 1.015 }}
          whileTap={{ scale: 0.985 }}
        >
          Sign up Professional
        </StyledButton>
      </PriceCard>

      {/* ENTERPRISE */}
      <PriceCard>
        <PriceCardTitle>Enterprise</PriceCardTitle>
        <PriceCardText>Everything to start</PriceCardText>
        <AnimatePresence>
          {selected === "M" ? (
            <PriceContainer>
              <PriceText
                key="monthly1"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
              >
                <span>$499</span>
                <span style={{ fontSize: "1.5rem" }}>/month</span>
              </PriceText>
            </PriceContainer>
          ) : (
            <PriceContainer>
              <PriceText
                key="monthly2"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
              >
                <span>$399</span>
                <span style={{ fontSize: "1.5rem" }}>/month</span>
              </PriceText>
            </PriceContainer>
          )}
        </AnimatePresence>
        <PriceFeatures>
          {features[2].map((feature, index) => (
            <FeatureItem key={index}>
              <svg
                width="20"
                height="15"
                viewBox="0 0 20 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="shrink-0"
              >
                <path
                  d="M6.35588 11.8345L1.61455 7.17002L0 8.7472L6.35588 15L20 1.57718L18.3968 0L6.35588 11.8345Z"
                  fill="black"
                />
              </svg>
              {feature.text}
            </FeatureItem>
          ))}
        </PriceFeatures>
        <StyledButton whileHover={{ scale: 1.015 }} whileTap={{ scale: 0.985 }}>
          Sign up Enterprise
        </StyledButton>
      </PriceCard>
    </PriceCardsContainer>
  );
};

const PriceCardsContainer = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
   
  }

  width: 100%;
  max-width: 75rem;
  margin: 0 auto;
  position: relative;
  z-index: 10;
`;

const PriceText = styled(motion.p)`
  font-size: 4rem;
  font-weight: bold;
  color: #4f46e5;
  transition: ease 0.25s; 

  @media (max-width: 768px){
    font-size: 2.5rem;
  }
`;

const PriceContainer = styled.div`
  position: relative;
`;

const PriceCard = styled.div`
  width: 100%;
  background-color: white;
  padding: 1.5rem;
  border: 1px solid #cbd5e0;
  border-radius: 0.75rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const PriceCardTitle = styled.p`
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 0.5rem;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const PriceCardText = styled.p`
  font-size: 1.25rem;
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
`;

const PriceAmount = styled.p`
  font-size: 4rem;
  font-weight: 700;

  span {
    font-size: 1.125rem;
    font-weight: 400;
  }
`;

const PriceFeatures = styled.div`
  overflow: hidden;
  margin-bottom: 2rem;
  margin-top: 1rem;
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 1.125rem;
  margin-bottom: 0.4rem;
  svg {
    width: 1rem;
    height: 0.8rem;
  }
`;

const StyledButton = styled(motion.button)`
  width: 100%;
  padding: 1rem;
  margin-top: 2rem;
  font-weight: 600;
  background-color: black;
  color: white;
  border-radius: 0.75rem;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
`;

export default PricingSection;
