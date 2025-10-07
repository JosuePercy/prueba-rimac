import { useEffect } from "react";
import { getPlans } from "../api/plan";
import { usePlanStore } from "../shared/store/usePlanStore";

export function usePlans() {
  const { setPlans, filterPlans } = usePlanStore();

  useEffect(() => {
    async function fetchPlans() {
      try {
        const data = await getPlans();
        setPlans(data.list); // Guardar todos los planes en el store
        filterPlans(); // Filtrar los planes según la edad y la opción seleccionada
      } catch (err) {
        console.error("Error al cargar los planes");
      }
    }
    fetchPlans();
  }, []); // Eliminar dependencias innecesarias para evitar múltiples ejecuciones
}