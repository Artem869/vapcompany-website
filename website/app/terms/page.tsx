'use client';

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-950">
            <Header />

            <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
                            Условия использования
                        </h1>
                        <p className="text-gray-600 dark:text-gray-400 mb-8">
                            Последнее обновление: {new Date().toLocaleDateString('ru-RU')}
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="prose prose-lg max-w-none"
                    >
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">1. Принятие условий</h2>
                            <p className="text-gray-700 dark:text-gray-400 leading-relaxed mb-4">
                                Добро пожаловать на сайт Vap Company. Используя наш сайт, вы соглашаетесь с настоящими
                                Условиями использования. Если вы не согласны с какими-либо условиями, пожалуйста, не
                                используйте наш сайт.
                            </p>
                            <p className="text-gray-700 dark:text-gray-400 leading-relaxed mb-4">
                                Мы оставляем за собой право изменять настоящие Условия в любое время. Продолжая использовать
                                сайт после внесения изменений, вы соглашаетесь с новыми условиями.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">2. Описание услуг</h2>
                            <p className="text-gray-700 dark:text-gray-400 leading-relaxed mb-4">
                                Vap Company предоставляет следующие услуги:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 dark:text-gray-400 space-y-2 mb-4">
                                <li>Сопровождение участия в тендерах и государственных закупках</li>
                                <li>Организация импорта товаров из Китая</li>
                                <li>Разработка веб-сайтов и веб-приложений</li>
                                <li>Разработка и внедрение CRM-систем</li>
                                <li>Консультационные услуги в области бизнеса</li>
                            </ul>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">3. Использование сайта</h2>
                            <p className="text-gray-700 dark:text-gray-400 leading-relaxed mb-4">
                                При использовании нашего сайта вы обязуетесь:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 dark:text-gray-400 space-y-2 mb-4">
                                <li>Предоставлять достоверную и актуальную информацию</li>
                                <li>Не использовать сайт в незаконных целях</li>
                                <li>Не распространять вредоносное ПО</li>
                                <li>Не нарушать права интеллектуальной собственности</li>
                                <li>Не создавать чрезмерную нагрузку на сервер</li>
                                <li>Соблюдать применимое законодательство</li>
                            </ul>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">4. Интеллектуальная собственность</h2>
                            <p className="text-gray-700 dark:text-gray-400 leading-relaxed mb-4">
                                Все материалы на сайте, включая, но не ограничиваясь, текстами, графикой, логотипами,
                                изображениями, аудио- и видеоматериалами, программным обеспечением, являются
                                собственностью Vap Company и защищены законами об авторском праве.
                            </p>
                            <p className="text-gray-700 dark:text-gray-400 leading-relaxed mb-4">
                                Вы не имеете права копировать, воспроизводить, распространять или создавать производные
                                работы без нашего письменного разрешения.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">5. Конфиденциальность</h2>
                            <p className="text-gray-700 dark:text-gray-400 leading-relaxed mb-4">
                                Использование нашего сайта также регулируется нашей{' '}
                                <a href="/privacy" className="text-blue-600 hover:text-blue-700 font-semibold">
                                    Политикой конфиденциальности
                                </a>
                                , которая описывает, как мы собираем, используем и защищаем ваши персональные данные.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">6. Отказ от гарантий</h2>
                            <p className="text-gray-700 dark:text-gray-400 leading-relaxed mb-4">
                                Сайт и услуги предоставляются "как есть" без каких-либо гарантий, явных или подразумеваемых.
                                Мы не гарантируем, что:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 dark:text-gray-400 space-y-2 mb-4">
                                <li>Сайт будет работать бесперебойно и без ошибок</li>
                                <li>Информация на сайте всегда будет актуальной и точной</li>
                                <li>Все функции будут доступны в любое время</li>
                                <li>Сайт будет защищен от всех угроз безопасности</li>
                            </ul>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">7. Ограничение ответственности</h2>
                            <p className="text-gray-700 dark:text-gray-400 leading-relaxed mb-4">
                                Vap Company не несет ответственности за:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 dark:text-gray-400 space-y-2 mb-4">
                                <li>Прямые, косвенные, случайные или штрафные убытки</li>
                                <li>Потерю данных или упущенную выгоду</li>
                                <li>Действия третьих лиц</li>
                                <li>Технические сбои или перерывы в работе сайта</li>
                                <li>Содержание сайтов третьих лиц, на которые ведут ссылки</li>
                            </ul>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">8. Ссылки на сторонние сайты</h2>
                            <p className="text-gray-700 dark:text-gray-400 leading-relaxed mb-4">
                                Наш сайт может содержать ссылки на сторонние веб-сайты. Мы не контролируем и не несем
                                ответственности за содержание, политику конфиденциальности или практику таких сайтов.
                            </p>
                            <p className="text-gray-700 dark:text-gray-400 leading-relaxed mb-4">
                                Переход по таким ссылкам осуществляется на ваш собственный риск.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">9. Прекращение доступа</h2>
                            <p className="text-gray-700 dark:text-gray-400 leading-relaxed mb-4">
                                Мы оставляем за собой право прекратить или приостановить ваш доступ к сайту в любое время
                                без предварительного уведомления, если вы нарушаете настоящие Условия использования.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">10. Применимое право</h2>
                            <p className="text-gray-700 dark:text-gray-400 leading-relaxed mb-4">
                                Настоящие Условия регулируются и толкуются в соответствии с законодательством Республики
                                Казахстан. Все споры, возникающие в связи с настоящими Условиями, подлежат рассмотрению
                                в судах города Алматы, Казахстан.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">11. Изменения условий</h2>
                            <p className="text-gray-700 dark:text-gray-400 leading-relaxed mb-4">
                                Мы можем обновлять настоящие Условия использования время от времени. Дата последнего
                                обновления указана в начале документа. Мы рекомендуем периодически проверять эту страницу
                                для ознакомления с изменениями.
                            </p>
                            <p className="text-gray-700 dark:text-gray-400 leading-relaxed mb-4">
                                Продолжение использования сайта после внесения изменений означает ваше согласие с новыми
                                условиями.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">12. Контактная информация</h2>
                            <p className="text-gray-700 dark:text-gray-400 leading-relaxed mb-4">
                                Если у вас есть вопросы относительно настоящих Условий использования, свяжитесь с нами:
                            </p>
                            <ul className="list-none text-gray-700 dark:text-gray-400 space-y-2">
                                <li>
                                    <strong>Email:</strong>{' '}
                                    <a href="mailto:vapcompany7605@gmail.com" className="text-blue-600 hover:text-blue-700">
                                        vapcompany7605@gmail.com
                                    </a>
                                </li>
                                <li><strong>Компания:</strong> Vap Company</li>
                                <li><strong>Местоположение:</strong> Алматы, Казахстан</li>
                            </ul>
                        </section>

                        <div className="mt-12 p-6 bg-blue-50 rounded-xl border border-blue-200">
                            <p className="text-sm text-gray-700 dark:text-gray-400 dark:text-gray-400">
                                <strong>Важно:</strong> Используя сайт Vap Company, вы подтверждаете, что прочитали,
                                поняли и согласны соблюдать настоящие Условия использования, а также нашу Политику
                                конфиденциальности.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
