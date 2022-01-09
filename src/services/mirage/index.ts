import { createServer, Factory, Model, Response } from "miragejs";

type Schedule = {
    title: string;
    text: string;
    appointedDay: string;
    startTime: string;
    finalTime: string;
}

export const makeServer = () => {
    const server = createServer({
        // models: {
        //     schedule: Model.extend<Partial<Schedule>>({})
        // },

        // factories: {
        //     schedule: Factory.extend({
        //         title() {

        //         },

        //         text() {

        //         },

        //         appointedDay() {

        //         },

        //         startTime() {

        //         },

        //         finalTime() {

        //         }
        //     })
        // },

        routes() {
            this.namespace = 'api'
            // this.timing = 2000

            this.get('/schedules', () => {
                return [
                    {
                        id: 1,
                        title: "Live: Iniciando com Nuxt por Mateus Ávila Isidoro",
                        text: "Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. Blanditiis quos in minus. Voluptatum quia quia voluptas voluptatem vero ex possimus. Iure et consectetur",
                        appointedDay: '2022-01-20',
                        startTime: "19:00",
                        finalTime: "22:00"
                    },

                    {
                        id: 2,
                        title: "Live: React com TDD por Darlan Tódero ten Caten",
                        text: "Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. Blanditiis quos in minus. Voluptatum quia quia voluptas voluptatem vero ex possimus. Iure et consectetur",
                        appointedDay: '2021-12-25',
                        startTime: "19:00",
                        finalTime: "22:00"
                    },

                    {
                        id: 3,
                        title: "Live: React com TDD por Darlan Tódero ten Caten",
                        text: "Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. Blanditiis quos in minus. Voluptatum quia quia voluptas voluptatem vero ex possimus. Iure et consectetur",
                        appointedDay: '2021-12-25',
                        startTime: "19:00",
                        finalTime: "22:00"
                    },

                    {
                        id: 4,
                        title: "Live: React com TDD por Darlan Tódero ten Caten",
                        text: "Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. Blanditiis quos in minus. Voluptatum quia quia voluptas voluptatem vero ex possimus. Iure et consectetur",
                        appointedDay: '2021-12-25',
                        startTime: "19:00",
                        finalTime: "22:00"
                    },

                    {
                        id: 5,
                        title: "Live: React com TDD por Darlan Tódero ten Caten",
                        text: "Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. Blanditiis quos in minus. Voluptatum quia quia voluptas voluptatem vero ex possimus. Iure et consectetur",
                        appointedDay: '2021-12-25',
                        startTime: "19:00",
                        finalTime: "22:00"
                    },

                    {
                        id: 6,
                        title: "Live: React com TDD por Darlan Tódero ten Caten",
                        text: "Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. Blanditiis quos in minus. Voluptatum quia quia voluptas voluptatem vero ex possimus. Iure et consectetur",
                        appointedDay: '2021-12-25',
                        startTime: "19:00",
                        finalTime: "22:00"
                    },

                    {
                        id: 7,
                        title: "Live: React com TDD por Darlan Tódero ten Caten",
                        text: "Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. Blanditiis quos in minus. Voluptatum quia quia voluptas voluptatem vero ex possimus. Iure et consectetur",
                        appointedDay: '2021-12-25',
                        startTime: "19:00",
                        finalTime: "22:00"
                    },
                ]
            })

            this.get('/news', () => {
                return [
                    {
                        src: "/assets/images/news/news1.png",
                        createdAt: "04-17-2020",
                        title: "Participe da nossa Live sobre React e testes TDD"
                    },
                    {
                        src: "/assets/images/news/news2.png",
                        createdAt: "04-17-2020",
                        title: "Participe da nossa live de Nuxt para a Turing"
                    },
                    {
                        src: "/assets/images/news/news3.png",
                        createdAt: "04-17-2020",
                        title: "Como apoiar uma desenvolvedora em início de carreira?"
                    }
                ]
            })

            this.passthrough();
        }
    })


    return server
}

