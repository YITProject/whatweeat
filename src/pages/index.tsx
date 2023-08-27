import { useState } from "react";
import all from "../data/all.json";
import { BaseButton } from "godown/react";
import { rand } from "../lib/rand";
import { stylobj } from "powerstyl";
import alert from "../lib/alert";
export default function Home() {
  const [restaurant, setRestaurant] = useState(-1);
  const [like, setLike] = useState(-1);
  const onRestaurantChange = () => {
    if (like > -1) {
      setLike(-1);
      alert({
        content: "Like has been reset",
        call: "warning"
      });
    }
    const r = rand(0, all.length - 1);
    setRestaurant(r);
    alert({
      content: all[r].name,
      call: "success"
    });
  };
  const onLikeChange = () => {
    const max = all[restaurant].likes.length;
    const r = rand(0, max - 1);
    setLike(r);
    alert({
      content: all[restaurant].likes[r],
      call: "success"
    });
  };
  return <main style={stylobj`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;`}>
    <BaseButton onClick={onRestaurantChange}>
      <span>
        Rand Restaurant
      </span>
    </BaseButton>
    {
      restaurant > -1 && all[restaurant].likes && <>
        <span>
          {all[restaurant].name}
        </span>
        <BaseButton onClick={onLikeChange}>
          <span>
            Rand Like
          </span>
        </BaseButton>
        {
          like > -1 && <span>
            {all[restaurant].likes[like]}
          </span>
        }
      </>
    }
  </main>;
};