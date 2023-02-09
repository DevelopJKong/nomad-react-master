import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 50vw;
  gap: 10px;
`;

const Box = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 40px;
  height: 200px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  display: flex;
  justify-content: center;
  align-items: center;

`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Btn = styled(motion.button)`
  background-color: white;
  width: 200px;
  height: 50px;
  margin-top: 15px;
  border: none;
  border-radius: 2.2222rem;
`;

const Circle = styled(motion.div)`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  background-color: white;
`;

function App() {
  const [id, setId] = useState<null | string>(null);
  const [circleId, setCircleId] = useState<boolean>(true);

  return (
    <Wrapper>
      <Grid>
        {["1", "2", "3", "4"].map((n) => (
          <div>
            <Box onClick={() => setId(n)} key={n} layoutId={n}>
              {circleId ? (
                <AnimatePresence>
                  {n === "2" ? (
                    <Circle
                      key={n}
                      layoutId="circle"
                    />
                  ) : null}
                </AnimatePresence>
              ) : (
                <AnimatePresence>
                  {n === "3" ? (
                    <Circle
                      key={n}
                      layoutId="circle"
                    />
                  ) : null}
                </AnimatePresence>
              )}
            </Box>
          </div>
        ))}
      </Grid>
      <AnimatePresence>
        {id ? (
          <Overlay
            onClick={() => setId(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Box
              layoutId={id}
              style={{ width: 500, height: 200, backgroundColor: "white" }}
            />
          </Overlay>
        ) : null}
      </AnimatePresence>
      <Btn onClick={() => setCircleId(!circleId)}>Switch</Btn>
    </Wrapper>
  );
}

export default App;
