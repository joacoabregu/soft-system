import { ICandidates } from "../types/interfaces";

const votingDate = {
  starteDate: "15/01/2022 08:00",
  endDate: "15/01/2022 18:00",
};

const candidates: ICandidates = {
  candidate1: {
    id: "1",
    name: "Candidato1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec rhoncus leo. Vestibulum sed turpis fringilla, efficitur risus eu, pretium.",
    image: "https://picsum.photos/200",
  },
  candidate2: {
    id: "2",
    name: "Candidato2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec rhoncus leo. Vestibulum sed turpis fringilla, efficitur risus eu, pretium.",
    image: "https://picsum.photos/200",
  },
  candidate3: {
    id: "3",
    name: "Candidato3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec rhoncus leo. Vestibulum sed turpis fringilla, efficitur risus eu, pretium.",
    image: "https://picsum.photos/200",
  },
  candidate4: {
    id: "4",
    name: "Candidato4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec rhoncus leo. Vestibulum sed turpis fringilla, efficitur risus eu, pretium.",
    image: "https://picsum.photos/200",
  },
};

const tokens = {
  token1: "1",
  token2: "2",
};

export { tokens, candidates, votingDate };
