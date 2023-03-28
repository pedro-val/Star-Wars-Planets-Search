import React, { useEffect } from 'react';
import useFetch from '../hooks/useFetch';
import '../App.css';

function Table() {
  const { isLoading, worldsReturn, fetchPlanets } = useFetch();

  useEffect(() => {
    fetchPlanets('https://swapi.dev/api/planets');
  }, [fetchPlanets]);

  return (
    <div>
      {isLoading ? 'Carregando...' : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Population</th>
              <th>Climate</th>
              <th>Diameter</th>
              <th>Gravity</th>
              <th>Orbital Period</th>
              <th>Rotation Period</th>
              <th>Surface Water Percentage</th>
              <th>Terrain</th>
              <th>URL</th>
              <th>Created</th>
              <th>Edited</th>
              <th>Films</th>
            </tr>
          </thead>
          <tbody>
            {worldsReturn.map((world) => (
              <tr key={ world.name }>
                <td>{ world.name }</td>
                <td>{ world.population }</td>
                <td>{ world.climate }</td>
                <td>{ world.diameter }</td>
                <td>{ world.gravity }</td>
                <td>{ world.orbital_period }</td>
                <td>{ world.rotation_period }</td>
                <td>{ world.surface_water }</td>
                <td>{ world.terrain }</td>
                <td>{ world.url }</td>
                <td>{ world.created }</td>
                <td>{ world.edited }</td>
                <td>{ world.films.map((iten, index) => <p key={ index }>{iten}</p>) }</td>
              </tr>
            ))}
          </tbody>
        </table>

      )}
    </div>
  );
}

export default Table;
