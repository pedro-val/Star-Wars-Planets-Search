import React, { useEffect, useContext } from 'react';
import Context from '../context/Context';
import '../App.css';
import Inputs from './Inputs';

function Table() {
  const state = useContext(Context);
  const { fetchPlanets, filteredArray, isLoading } = state;

  useEffect(() => {
    fetchPlanets('https://swapi.dev/api/planets');
  }, [fetchPlanets]);

  return (
    <div>
      <Inputs />
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
            {filteredArray.map((world) => (
              <tr key={ world.name }>
                <td
                  data-testid="planet-name"
                >
                  { world.name }

                </td>
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
