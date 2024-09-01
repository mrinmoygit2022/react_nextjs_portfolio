import { FC } from 'react';
import AnimatedCursor from 'react-animated-cursor'; // Make sure to import AnimatedCursor from the correct package

interface CursorProps {
  color: string; // Define the color prop
}

export const Cursor: FC<CursorProps> = () => {
  return (
    <AnimatedCursor
      innerSize={8}
      outerSize={35}
      innerScale={1}
      outerScale={2}
      outerAlpha={0}
      // hasBlendMode={true}
      innerStyle={{
        backgroundColor: "#fff", // Use the color prop for innerStyle
      }}
      outerStyle={{
        border: `1px solid "#fff"`, // Use the color prop for outerStyle
      }}
    />
  );
};
