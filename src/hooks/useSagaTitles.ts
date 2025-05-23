import { useEffect, useState } from "react";
import { getSagaById } from "../services/getSagasById";

export const useSagaTitles = (ids: number[]) => {
  const [titles, setTitles] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const fetchTitles = async () => {
      for (const id of ids) {
        try {
          const data = await getSagaById(id);
          const title = data?.tittle || data?.title;
          if (title) {
            setTitles((prev) => ({ ...prev, [id.toString()]: title }));
          }
        } catch (error) {
          console.error(`Error al cargar saga ${id}:`, error);
        }
      }
    };

    fetchTitles();
  }, [ids]);

  return titles;
};
