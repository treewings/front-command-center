import React from "react";
import { Helmet } from "react-helmet";
import { MenuButton, OutlinedCard, TascomFooter } from "../../components";
import { ReactComponent as Config } from "../../assets/svg/Config.svg";
import { ReactComponent as Hearth } from "../../assets/svg/Hearth.svg";
import { ReactComponent as Health } from "../../assets/svg/Health.svg";
import { ReactComponent as Drugs } from "../../assets/svg/Drugs.svg";
import { ReactComponent as Surgerie } from "../../assets/svg/Surgerie.svg";
import { ReactComponent as Supply } from "../../assets/svg/Supply.svg";
import { ReactComponent as Diet } from "../../assets/svg/Diet.svg";
import { ReactComponent as Panel } from "../../assets/svg/Panel.svg";
import { ReactComponent as Xray } from "../../assets/svg/Xray.svg";
import { ReactComponent as Window } from "../../assets/svg/Window.svg";

const UTIUIVacancies = () => {
  const panelsLinks = [
    [
      {
        unit: "ASSISTENCIAL",
        icon: <Hearth className="w-6 h-6 opacity-80" />,
        panels: [
          {
            name: "PACIENTES INTERNADOS",
            path: "/pronto_socorro/geral",
          },
          {
            name: "LEITOS OCUPADOS",
            path: "/pronto_socorro/exames",
          },
          {
            name: "TRADICIONAL | DIRECIONADO",
            path: "/pronto_socorro/filas",
          },
          {
            name: "MAPA DE LEITOS",
            path: "/mapas_de_leitos",
          },
          {
            name: "OCUPAÇÃO GERAL",
            path: "/ocupacao_geral",
          },
        ],
      },
    ],
    [
      {
        unit: "CC | HD | UTI",
        icon: <Health className="w-6 h-6 opacity-80" />,
        panels: [
          {
            name: "ÁREA HD | UI",
            path: "/HD_UI_UTI/geral",
          },
          {
            name: "PREVISIBILIDADE DE INTERNAÇÕES",
            path: "/HD_UI_UTI/previsibilidade_de_internacoes",
          },
          {
            name: "PACIENTES NO PRÉ-CIRÚRGICO",
            path: "/HD_UI_UTI/pre_cirurgico",
          },
          {
            name: "UI | UTI",
            path: "/HD_UI_UTI/vagas",
          },
        ],
      },
      {
        icon: <Panel className="w-6 h-6 opacity-80" />,
        panels: [
          {
            name: "GESTÃO DE ALTAS",
            path: "/gestao_de_altas",
          },
        ],
      },
    ],
    [
      {
        unit: "FARMÁCIA",
        icon: <Drugs className="w-6 h-6 opacity-80" fill="#00FF66" />,
        panels: [
          {
            name: "FARMÁCIA ASSISTENCIAL 1",
            path: "/farmacia/sinalizacoes",
          },
          {
            name: "FARMÁCIA ASSISTENCIAL 2",
            path: "/farmacia/solicitacoes",
          },
          {
            name: "FARMÁCIA CC",
            path: "/farmacia/cc",
          },
          {
            name: "OPME PROCEDIMENTOS",
            path: "/farmacia/opme/procedimentos",
          },
          {
            name: "OPME ITENS",
            path: "/farmacia/opme/itens",
          },
        ],
      },
    ],
    [
      {
        unit: "SUPPLY CHAIN",
        icon: <Supply className="w-6 h-6 opacity-80" />,
        panels: [
          {
            name: "SUPPLY PADROZINADO",
            path: "/suprimentos/padronizado",
          },
          {
            name: "SUPPLY NÃO PADROZINADO",
            path: "/suprimentos/nao_padronizado",
          },
          {
            name: "FOLLOW UP SEMANAL",
            path: "/suprimentos/itens_de_compras",
          },
          {
            name: "ESTOQUE DE ITENS PADRONIZADO",
            path: "/suprimentos/estoque_de_itens/padronizado",
          },
          {
            name: "ESTOQUE DE ITENS NÃO PADRONIZADO",
            path: "/suprimentos/estoque_de_itens/nao_padronizado",
          },
        ],
      },
    ],
    [
      {
        unit: "SND",
        icon: <Diet className="w-6 h-6 opacity-80" fill="#00FF66" />,
        panels: [
          {
            name: "SND SINALIZAÇÕES",
            path: "/snd/sinalizacoes",
          },
          {
            name: "SND ALERTAS",
            path: "/snd/alertas",
          },
        ],
      },
      {
        icon: <Xray className="w-6 h-6 opacity-80" fill="#00FF66" />,
        panels: [
          {
            name: "SALA 100",
            path: "/sala_100",
          },
        ],
      },
      {
        icon: <Window className="w-6 h-6 opacity-80" />,
        panels: [
          {
            name: "CONSUMO ALMOXARIFADO",
            path: "/suprimentos/consumo",
          },
        ],
      },
      {
        icon: <Panel className="w-6 h-6 opacity-80" />,
        panels: [
          {
            name: "PAINEL DE INTERNAÇÃO",
            path: "/internacoes",
          },
        ],
      },
    ],
    [
      {
        unit: "CIRÚRGICO",
        icon: <Surgerie className="w-6 h-6 opacity-80" />,
        panels: [
          {
            name: "CENTRO CIRÚRGICO",
            path: "/centro_cirurgico",
          },
        ],
      },
    ],
  ];

  const buttons = panelsLinks.map((collumn) => (
    <div className="flex flex-col gap-1 justify-between h-full">
      {collumn.map((link, i) =>
        link.unit ? (
          <OutlinedCard
            key={link.unit}
            title={link.unit}
            className="flex flex-col gap-1 h-full"
          >
            {link.panels.map((panel) => (
              <MenuButton
                key={panel.path}
                to={panel.path}
                icon={link.icon}
                className="h-26"
              >
                {panel.name}
              </MenuButton>
            ))}
          </OutlinedCard>
        ) : (
          <div
            key={link.panels[0].path + i}
            className="flex flex-col gap-1 h-full"
          >
            {link.panels.map((panel) => (
              <MenuButton
                key={panel.path}
                to={panel.path}
                icon={link.icon}
                className="h-26"
              >
                {panel.name}
              </MenuButton>
            ))}
          </div>
        )
      )}
    </div>
  ));

  return (
    <main className="min-h-screen w-ful flex flex-col justify-center items-center">
      <Helmet>
        <title>CMDC | Menu</title>
        <meta
          name="description"
          content="Dashboard relacionado as vagas de UI | UTI"
        />
      </Helmet>
      <section className="px-5 w-full flex-1 flex items-center">
        <div className="flex flex-col gap-1 max-w-7xl mx-auto">
          <header className="relative">
            <h1 className="text-2xl text-white text-center flex-1 font-bold">
              SMART CENTER
            </h1>
            <Config className="w-5 h-5 absolute right-5 top-1" />
          </header>
          <div className="grid sm:grid-cols-6 grid-cols-3 gap-1">{buttons}</div>
        </div>
      </section>
      <TascomFooter />
    </main>
  );
};

export default UTIUIVacancies;
