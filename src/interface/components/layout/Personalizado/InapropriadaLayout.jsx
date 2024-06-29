import React from 'react';
import styles from './Inapropriado.module.css';

const Inapropriado = ({ onClose }) => {
    return (
        <div className={styles.overlay}>
            <div className={styles.popup}>
                <h2>Marcar a proposta como inapropriada</h2>
                <form>
                    <label>
                        <input type="radio" name="reason" value="inappropriate" />
                        O conteúdo é inapropriado, tem pouca informação ou está mal definido
                    </label>
                    <label>
                        <input type="radio" name="reason" value="services" />
                        Está oferecendo seus serviços
                    </label>
                    <label>
                        <input type="radio" name="reason" value="incorrect_category" />
                        Categoria incorreta
                    </label>
                    <label>
                        <input type="radio" name="reason" value="contact_info" />
                        Possui informações de contato ou de pagamento externo
                    </label>
                    <label>
                        <input type="radio" name="reason" value="free_work" />
                        Pede trabalho gratuito ou baixo orçamento
                    </label>
                    <label>
                        <input type="radio" name="reason" value="other" />
                        Outra razão
                    </label>
                    <label>
                        Mais informações
                        <textarea name="more_info"></textarea>
                    </label>
                    <button type="submit">Enviar</button>
                </form>
                <button className={styles.closeButton} onClick={onClose}>X</button>
            </div>
        </div>
    );
};

export default Inapropriado;
