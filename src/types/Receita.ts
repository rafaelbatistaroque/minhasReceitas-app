export type Receita = {
    id: string;
    categoriasId: string[];
    titulo: string;
    accessibilidade: string;
    complexidade: string;
    urlImagem: string;
    duracao: number;
    ingredientes: string[];
    passoAPasso: string[];
    contemGlutem: boolean;
    contemLactose: boolean;
    ehVegano: boolean;
    ehVegetariano: boolean;
}