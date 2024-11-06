import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import { Line } from "react-chartjs-2";
import "chartjs-adapter-moment";
import Sidebar from '../NavigationBar/SideBar';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


const API_URL =
  "https://0gk17cztpb.execute-api.sa-east-1.amazonaws.com/getLatestData";

// Tipagem para os dados recebidos da API
interface Medicao {
  dado_id: number;
  dispositivo_id: number;
  data_hora_medicao: string;
  temperatura: number;
  status_alerta: string;
}

interface DadoTratado {
  nome: number;
  medicoes: Omit<Medicao, "dispositivo_id">[];
}

function organizar(dados_crus: Medicao[]): DadoTratado[] {
  const dadosAgrupados = dados_crus.reduce<Record<number, DadoTratado>>(
    (acc, dado) => {
      const { dispositivo_id, ...rest } = dado;

      if (!acc[dispositivo_id]) {
        acc[dispositivo_id] = {
          nome: dispositivo_id,
          medicoes: [],
        };
      }

      acc[dispositivo_id].medicoes.push(rest);

      return acc;
    },
    {}
  );

  return Object.values(dadosAgrupados);
}

function Dashboard() {
  const [dadosTratados, setDadosTratados] = useState<DadoTratado[]>([]);

  useEffect(() => {
    fetch(API_URL)
      .then(() => {
        const data: Medicao[] = [
          {
            dado_id: 508,
            dispositivo_id: 1,
            data_hora_medicao: "2024-09-23T00:37:58",
            temperatura: 5.0,
            status_alerta: "alerta",
          },
          {
            dado_id: 507,
            dispositivo_id: 1,
            data_hora_medicao: "2024-09-23T00:24:13",
            temperatura: -2.0,
            status_alerta: "alerta",
          },
          {
            dado_id: 506,
            dispositivo_id: 1,
            data_hora_medicao: "2024-09-13T16:43:06",
            temperatura: 2.0,
            status_alerta: "normal",
          },
          {
            dado_id: 505,
            dispositivo_id: 1,
            data_hora_medicao: "2024-09-13T16:38:06",
            temperatura: -3.0,
            status_alerta: "normal",
          },
          {
            dado_id: 504,
            dispositivo_id: 1,
            data_hora_medicao: "2024-09-13T16:33:06",
            temperatura: -2.0,
            status_alerta: "normal",
          },
          {
            dado_id: 504,
            dispositivo_id: 2,
            data_hora_medicao: "2024-09-13T16:33:06",
            temperatura: -5.0,
            status_alerta: "normal",
          },
          {
            dado_id: 504,
            dispositivo_id: 2,
            data_hora_medicao: "2024-09-13T15:33:06",
            temperatura: -2.0,
            status_alerta: "normal",
          },
          {
            dado_id: 504,
            dispositivo_id: 2,
            data_hora_medicao: "2024-09-13T14:33:06",
            temperatura: 0.0,
            status_alerta: "normal",
          },
          {
            dado_id: 504,
            dispositivo_id: 2,
            data_hora_medicao: "2024-09-13T13:33:06",
            temperatura: 3.0,
            status_alerta: "normal",
          },
          {
            dado_id: 504,
            dispositivo_id: 2,
            data_hora_medicao: "2024-09-13T12:33:06",
            temperatura: 5.0,
            status_alerta: "normal",
          },
        ];
        return data;
      })
      .then((data) => {
        const res = organizar(data);
        setDadosTratados(res);
        console.log(res);
      });
  }, []);

  return (
    <div>
      {/* Grid de Cards */}
      <div className="home-cards">
        {dadosTratados.length > 0 &&
          dadosTratados.map((dispositivo, index) => {
            const ultimaMedicao =
              dispositivo.medicoes[dispositivo.medicoes.length - 1];
            const emAlerta = ultimaMedicao.status_alerta === "alerta";

            return (
              <div
                key={index}
                className="card"
                style={{
                  backgroundColor: emAlerta ? "red" : "white",
                  color: emAlerta ? "white" : "black",
                }}
              >
                <div>
                  <h3>Freezer {dispositivo.nome}</h3>
                  <h3>{ultimaMedicao.temperatura}º C</h3>
                  {emAlerta && <p>Freezer em alerta!</p>}
                </div>
                <Line
                  data={prepararDadosParaGrafico(dispositivo)}
                  options={{
                    responsive: true,
                    plugins: {
                      legend: {
                        display: false,
                      },
                    },
                  }}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}

function prepararDadosParaGrafico(dispositivo: DadoTratado) {
  const dataset = {
    data: dispositivo.medicoes.map((medicao) => medicao.temperatura),
    borderColor: "#6971FF",
  };
  const labels = dispositivo.medicoes.map((medicao) =>
    medicao.data_hora_medicao.split("T")[1].substring(0, 5)
  );

  return {
    labels: labels,
    datasets: [dataset],
  };
}

export default Dashboard;