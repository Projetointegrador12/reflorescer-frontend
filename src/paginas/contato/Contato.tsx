function Contato() {
    return (
        <>
            <div className="flex items-center justify-center p-12">
                <div className="mx-auto w-full max-w-[550px]">
                    <form action="https://formbold.com/s/FORM_ID" method="POST">
                        <div className="mb-5">
                            <label
                                className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                                Nome Completo
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Nome Completo"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>
                        <div className="mb-5">
                            <label

                                className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="exemplo@dominio.com"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>
                        <div className="mb-5">
                            <label

                                className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                                Assunto
                            </label>
                            <input
                                type="text"
                                name="subject"
                                id="subject"
                                placeholder="Qual o assunto?"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>
                        <div className="mb-5">
                            <label

                                className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                                Mensagem
                            </label>
                            <textarea

                                name="message"
                                id="message"
                                placeholder="Escreva a sua mensagem"
                                className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            ></textarea>
                        </div>
                        <div>
                            <button
                                className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
                            >
                                Enviar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Contato;