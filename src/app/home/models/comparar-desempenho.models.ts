export interface CompararDesempenho {
    escolas_estaduais: [
        {
            instituicao: string;
            posicao: number;
            total_premiacoes: number;
        }
    ],
    escolas_federais: [
        {
            instituicao: string;
            posicao: number;
            total_premiacoes: number;
        }
    ],
    estado: string,
    nivel: number
}