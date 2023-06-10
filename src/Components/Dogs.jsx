import { useDogs } from "../Provider/DogsProvider";
import { DogCard } from "./DogCard";

export const Dogs = () => {
  const { filteredDogs, deleteDog, unfavoriteDog, favoriteDog, showComponent } =
    useDogs();

  return (
    <>
      {["all-dogs", "favorite-dogs", "unfavorite-dogs"].includes(
        showComponent
      ) && (
        <>
          {filteredDogs.map((dog) => (
            <DogCard
              dog={dog}
              key={dog.id}
              onTrashIconClick={() => deleteDog(dog.id)}
              onHeartClick={() => unfavoriteDog(dog.id)}
              onEmptyHeartClick={() => favoriteDog(dog.id)}
            />
          ))}
        </>
      )}
    </>
  );
};
