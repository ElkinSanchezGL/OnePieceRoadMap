import { useEffect, useState } from "react";
import { getSagaById } from "../services/getSagasById";

export const useSagaTitles = (ids: number[]) => {
  const [titles, setTitles] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (!ids.length) return;

    let isMounted = true;

    const fetchTitles = async () => {
      try {
        const results = await Promise.all(
          ids.map(async (id) => {
            try {
              const data = await getSagaById(id);
            
              const title = data?.title || data?.tittle || "Sin título";
              return { id: id.toString(), title };
            } catch (error) {
              console.error(`Error al cargar saga ${id}:`, error);
              return null;
            }
          })
        );

        if (isMounted) {
          const titlesMap = results.reduce((acc, curr) => {
            if (curr) acc[curr.id] = curr.title;
            return acc;
          }, {} as { [key: string]: string });

          setTitles(titlesMap);
        }
      } catch (error) {
        console.error("Error al cargar títulos:", error);
      }
    };

    fetchTitles();

    return () => {
      isMounted = false;
    };
  }, [ids]);

  return titles;
};
