'use client';

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PrivacyPage() {
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
                            Политика конфиденциальности
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
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">1. Общие положения</h2>
                            <p className="text-gray-700 dark:text-gray-400 leading-relaxed mb-4">
                                Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональных
                                данных пользователей сайта Vap Company (далее — «Компания»).
                            </p>
                            <p className="text-gray-700 dark:text-gray-400 leading-relaxed mb-4">
                                Используя наш сайт, вы соглашаетесь с условиями настоящей Политики конфиденциальности.
                                Если вы не согласны с условиями, пожалуйста, не используйте наш сайт.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">2. Сбор информации</h2>
                            <p className="text-gray-700 dark:text-gray-400 leading-relaxed mb-4">
                                Мы собираем следующие виды информации:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 dark:text-gray-400 space-y-2 mb-4">
                                <li>Имя и контактные данные (email, телефон)</li>
                                <li>Информацию о компании (название, сфера деятельности)</li>
                                <li>Данные о взаимодействии с сайтом (IP-адрес, браузер, действия на сайте)</li>
                                <li>Файлы cookie для улучшения работы сайта</li>
                            </ul>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">3. Использование информации</h2>
                            <p className="text-gray-700 dark:text-gray-400 leading-relaxed mb-4">
                                Собранная информация используется для:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 dark:text-gray-400 space-y-2 mb-4">
                                <li>Предоставления запрашиваемых услуг</li>
                                <li>Связи с вами по вопросам сотрудничества</li>
                                <li>Улучшения качества наших услуг</li>
                                <li>Отправки информационных материалов (с вашего согласия)</li>
                                <li>Соблюдения законодательных требований</li>
                            </ul>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">4. Защита данных</h2>
                            <p className="text-gray-700 dark:text-gray-400 leading-relaxed mb-4">
                                Мы применяем современные технические и организационные меры для защиты ваших персональных
                                данных от несанкционированного доступа, изменения, раскрытия или уничтожения.
                            </p>
                            <p className="text-gray-700 dark:text-gray-400 leading-relaxed mb-4">
                                Доступ к персональным данным имеют только уполномоченные сотрудники, которые обязаны
                                соблюдать конфиденциальность.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">5. Передача данных третьим лицам</h2>
                            <p className="text-gray-700 dark:text-gray-400 leading-relaxed mb-4">
                                Мы не продаем и не передаем ваши персональные данные третьим лицам, за исключением
                                следующих случаев:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 dark:text-gray-400 space-y-2 mb-4">
                                <li>С вашего явного согласия</li>
                                <li>Для предоставления запрашиваемых услуг (партнеры и подрядчики)</li>
                                <li>По требованию закона или государственных органов</li>
                                <li>Для защиты наших прав и безопасности</li>
                            </ul>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">6. Файлы cookie</h2>
                            <p className="text-gray-700 dark:text-gray-400 leading-relaxed mb-4">
                                Мы используем файлы cookie для улучшения работы сайта и персонализации вашего опыта.
                                Вы можете настроить свой браузер для отклонения cookie, однако это может ограничить
                                функциональность сайта.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">7. Ваши права</h2>
                            <p className="text-gray-700 dark:text-gray-400 leading-relaxed mb-4">
                                Вы имеете право:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 dark:text-gray-400 space-y-2 mb-4">
                                <li>Получать информацию о хранящихся данных</li>
                                <li>Требовать исправления неточных данных</li>
                                <li>Запросить удаление ваших персональных данных</li>
                                <li>Отозвать согласие на обработку данных</li>
                                <li>Ограничить обработку данных</li>
                                <li>Получить копию ваших данных</li>
                            </ul>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">8. Хранение данных</h2>
                            <p className="text-gray-700 dark:text-gray-400 leading-relaxed mb-4">
                                Мы храним ваши персональные данные только в течение необходимого срока для достижения
                                целей их обработки или в соответствии с требованиями законодательства.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">9. Изменения в политике</h2>
                            <p className="text-gray-700 dark:text-gray-400 leading-relaxed mb-4">
                                Мы оставляем за собой право вносить изменения в настоящую Политику конфиденциальности.
                                Все изменения вступают в силу с момента публикации на сайте. Мы рекомендуем периодически
                                проверять эту страницу для ознакомления с изменениями.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">10. Контактная информация</h2>
                            <p className="text-gray-700 dark:text-gray-400 leading-relaxed mb-4">
                                По всем вопросам, связанным с обработкой персональных данных, вы можете связаться с нами:
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

                        <div className="mt-12 p-6 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200">
                            <p className="text-sm text-gray-600 dark:text-gray-400 dark:text-gray-400">
                                <strong>Примечание:</strong> Настоящая Политика конфиденциальности составлена в соответствии
                                с требованиями законодательства Республики Казахстан о персональных данных и другими
                                применимыми нормативными правовыми актами.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
