// previous imports
import type { LoaderFunction } from "remix";

// this is another "contract function"
export const loader: LoaderFunction = () => {
    return fetch("https://pokeapi.co/api/v2/pokemon")
}

// This is another "contract function"
export function meta() {
    return {
      title: 'Pokemons',
      description: 'List of Pokemons',
    }
  }

// export default function Pokemons...