const uk: {
	[key: string]: string
} = {
	loginEmailPlaceholder: "Адреса електронної пошти",
	loginPasswordPlaceholder: "Пароль",
	loginTwoFactorCodePlaceholder: "Код двофакторної аутентифікації",
	loginBtn: "Увійти",
	titlebarLogin: "Вхід",
	loginInvalidFields: "Неправильні поля",
	loginInvalidEmail: "Неправильна адреса електронної пошти",
	loginInvalidEmailOrPassword: "Неправильний пароль або адреса електронної пошти",
	loginAccountNotYetActivated: "Обліковий запис ще не активований",
	loginWrongEmailOrPassword: "Неправильна адреса електронної пошти або пароль",
	invalidTwoFactorKey: "Неправильний код двофакторної аутентифікації",
	titlebarMain: "Filen",
	titlebarSettings: "Налаштування",
	titlebarSelectFolderRemote: "Виберіть папку у хмарі",
	titlebarDownload: "Скачування",
	titlebarCloud: "Хмара",
	titlebarUpload: "Завантаження",
	titlebarSelectiveSync: "Вибіркова синхронізація",
	close: "Закрити",
	save: "Зберегти",
	syncingItemsFooterSingular: "Синхронізація __COUNT__ об'єкта",
	syncingItemsFooterPlural: "Синхронізація __COUNT__ об'єктів",
	syncingFooterEverythingSynced: "Все синхронізовано",
	aboutRemaining: "Залишилось приблизно __TIME__",
	noSyncActivityYet: "Жодних подій не відбувається",
	createOne: "Створити",
	noSyncLocationsSetupYet: "Місце синхронізації ще не налаштоване",
	storageUsed: "__USED__ з __MAX__ використано",
	quitFilen: "Вийти з Filen",
	openWebsite: "Відкрити сайт",
	settings: "Налаштування",
	actions: "Дії",
	youAreOffline: "Ви знаходитесь в автономному режимі",
	forgotPasswordBtn: "Забули пароль",
	createAccountBtn: "Створити обліковий запис",
	select: "Вибрати",
	thisFolderIsEmpty: "Ця папка пуста",
	createFolder: "Створити папку",
	create: "Створити",
	downloadDone: "Скачування завершено",
	openFolder: "Відкрити папку",
	download: "Скачати",
	change: "Змінити",
	open: "Відкрити",
	noFilesOrFoldersUploadedYet: "Файли чи папки ще не завантажувалися",
	uploadDone: "Завантаження завершено",
	preparingUpload: "Триває підготовка..",
	preparingUploadFolders: "Створення структури папок..",
	launchAtSystemStartup: "Запускати під час запуску системи",
	darkMode: "Темна тема",
	excludeDot: "Виключити файли та папки, що починаються з крапки (рекомендовано)",
	excludeDotTooltip: 'Виключити файли та папки, що починаються з крапки, наприклад ".gitignore, .DS_Store"',
	language: "Мова",
	saveLogs: "Зберегти журнал",
	cannotCreateSyncLocation: "Не вдалось створити місце синхронізації",
	cannotCreateSyncLocationSubdir: "Вам необхідно вибрати хоча б одну субдиректрорію",
	cannotCreateSyncLocationLoop:
		"Локальний шлях, який ви вибрали, вже є налаштованим місцем синхронізації. Це може призвести до нескінченних циклів синхронізації",
	cannotCreateSyncLocationAccess: "Не вдалося отримати доступ до локального каталогу. Можливо, у вас немає прав доступу?",
	selectRemoteLocation: "Виберіть розташування у хмарі",
	syncMode: "Режим синхронізації",
	syncModeTwoWay: "Двосторонній",
	syncModeLocalToCloud: "З пристрою на хмару",
	syncModeCloudToLocal: "З хмари на пристрій",
	syncModeLocalBackup: "Хмарне резервне копіювання",
	syncModeCloudBackup: "Локальне резервне копіювання",
	selectiveSync: "Вибіркова синхронізація",
	selectiveSyncTooltip: "Налаштуйте, які папки та файли ви хочете синхронізувати локально",
	configure: "Налаштувати",
	filenignoreTooltip: "Виключити шляхи та шаблони із синхронізації. Працює так само, як файл .gitignore",
	edit: "Редагувати",
	paused: "Призупинено",
	deleteSyncLocation: "Видалити місце синхронізації",
	confirmDeleteSyncLocation: "Ви впевнені, що бажаєте видалити це місце синхронізації?",
	delete: "Видалити",
	filenignoreHeader: "Ігнорований шаблон, розділений новим рядком",
	accountStorageUsed: "__PERCENT__% з __MAX__ використано",
	logout: "Вийти",
	accountCurrentPlan: "Поточний план",
	accountUpgrade: "Покращити",
	accountStorageInUse: "Використовується __PERCENT__%",
	confirmLogout: "Ви впевнені, що бажаєте вийти?",
	resumeSyncing: "Продовжити синхронізацію",
	noSyncIssues: "Проблем із синхронізацією немає",
	clearSyncIssues: "Очистити проблеми",
	clearSyncIssuesInfo:
		"Після очищення вказаних проблем клієнт спробує синхронізуватися знову. Будь ласка, переконайтеся, що всі проблеми вирішені перед їх очищенням.",
	clear: "Очистити",
	uploadBandwidthThrottling: "Обмеження пропускної здатності завантаження",
	unlimited: "Необмежено",
	downloadBandwidthThrottling: "Обмеження пропускної здатності скачування",
	networkThrottling: "Мережеві обмеження",
	maximumUploadBandwidth: "Максимальна пропускна здатність для завантаження (у Кбіт/с)",
	maximumDownloadBandwidth: "Максимальна пропускна здатність для скачування (у Кбіт/с)",
	disableThrottlingInfo: "Встановлення значення 0 відключить обмеження",
	resetToDefaults: "Скинути до стандартних налаштувань",
	changeKeybind: "Змінити прив'язку клавіш",
	pressKeyOrCombo: "Натисніть будь-яку кнопку або комбінацію клавіш",
	settingsGeneral: "Загальні",
	settingsSyncs: "Синхронізація",
	settingsAccount: "Обліковий запис",
	settingsIssues: "Проблеми",
	settingsNetworking: "Мережа",
	settingsKeybinds: "Комбінації клавіш",
	createFolderPlaceholder: "Назва папки",
	invalidFolderName: "Неприпустима назва папки",
	titlebarCloudWindow: "Хмара",
	updateAvailable: "Доступно оновлення, будь ласка, завантажте останню версію для виправлення помилок та покращення продуктивності.",
	downloadUpdateBtn: "Завантажити оновлення",
	pause: "Пауза",
	resume: "Продовжити",
	keybinds_uploadFolders: "Завантажити папки",
	keybinds_uploadFiles: "Завантажити файли",
	keybinds_openSettings: "Відкрити налаштування",
	keybinds_pauseSync: "Призупинити синхронізацію",
	keybinds_resumeSync: "Продовжити синхронізацію",
	keybinds_openWebsite: "Відкрити сайт",
	keybindNotBound: "Не прив'язано",
	syncing: "Синхронізація..",
	maxStorageReached:
		"Ви досягли максимального обсягу пам’яті свого облікового запису. Щоб мати можливість продовжити синхронізацію, рекомендуємо покращити план.",
	syncTaskDownloadFromRemote: "Скачано з хмари",
	syncTaskUploadToRemote: "Завантажено на хмару",
	syncTaskRenameInRemote: "Перейменовано у хмарі",
	syncTaskRenameInLocal: "Перейменовано локально",
	syncTaskMoveInRemote: "Переміщено у хмарі",
	syncTaskMoveInLocal: "Переміщено на пристрої",
	syncTaskDeleteInRemote: "Видалено у хмарі",
	syncTaskDeleteInLocal: "Видалено локально",
	queued: "В черзі",
	acquiringSyncLock: "Отримання блокування синхронізації..",
	syncLocationCreated: "Місце синхронізації створено. Щоб запустити синхронізацію, потрібно зняти її з паузи.",
	checkingChanges: "Перевірка змін..",
	syncModeTwoWayInfo: "Дублювати кожну дію в обох напрямках",
	syncModeLocalToCloudInfo: "Дублювати кожну дію, вчинену локально, на хмару, але не реагувати на зміни на хмарі",
	syncModeCloudToLocalInfo: "Дублювати кожну дію, вчинену на хмарі, на пристрій, але не реагувати на локальні зміни",
	syncModeLocalBackupInfo: "Тільки завантажувати дані на хмару, ніколи нічого не видаляти та не реагувати на зміни на хмарі",
	syncModeCloudBackupInfo: "Тільки завантажувати дані з хмари, ніколи нічого не видаляти та не реагувати на локальні зміни",
	cancel: "Скасувати",
	cannotCreateSyncLocationLoop2:
		"Місце на хмарі, яке ви вибрали, вже є налаштованим місцем синхронізації. Це може призвести до нескінченних циклів синхронізації",
	titlebarUpdateAvailable: "Доступне оновлення",
	updateWindowInfo:
		"Нова версія завантажена та готова до встановлення. Будь ласка, встановіть її якомога швидше, щоб скористатися перевагами виправлень помилок і нових функцій.",
	updateWindowButton: "Встановити",
	updateWindowInfo2: "Додаток закриється, встановить оновлення та перезавантажиться. Будь ласка, не переривайте цей процес.",
	titlebarUpdateInstalled: "Оновлення встановлено",
	clearLocalEventLog: "Очистити локальний журнал подій",
	clearLocalEventLogInfo: "Це очистить показаний локальний журнал подій. Ви впевнені? Цю дію не можна скасувати!",
	copied: "Скопійовано",
	publicLinkCopied: "Публічне посилання скопійовано до буфера обміну",
	clearLocalTrashDirs: "Очистити локальні кошики",
	clearLocalTrashDirsInfo: "Очищення локальних кошиків не може бути скасовано! Чи ви впевнені?",
	updateWindowInfo3:
		"Клієнт завершить роботу і запустить потік оновлень у фоновому режимі. Він перезапуститься, коли завершить роботу. Будь ласка, не переривайте цей процес.",
	pleaseLogin: "Будь ласка, увійдіть",
	traySyncIssues: "__NUM__ проблем синхронізації",
	traySyncing: "Синхронізація __NUM__ об'єктів",
	everythingSynced: "Все синхронізовано",
	trayWarnings: "__NUM__ попереджень",
	trayNoSyncSetup: "Місце синхронізації ще не налаштоване",
	trayNoSyncRemoteSetup: "Віддалене місце синхронізації ще не налаштоване",
	timeSinceSeconds: "__TIME__ секунд тому",
	timeSinceMinutes: "__TIME__ хвилин тому",
	timeSinceHours: "__TIME__ годин тому",
	timeSinceDays: "__TIME__ днів тому",
	timeSinceMonths: "__TIME__ місяців тому",
	timeSinceYears: "__TIME__ років тому",
	trayMenuShow: "Відкрити",
	trayMenuForceSync: "Примусова синхронізація",
	trayMenuUploadFolders: "Завантажити папки",
	trayMenuUploadFiles: "Завантажити файли",
	trayMenuSettings: "Налаштування",
	trayMenuQuit: "Вийти з Filen",
	openLocalFolder: "Відкрити локальну папку",
	openLocalTrash: "Відкрити локальний кошик",
	help: "Допомога",
	possibleSolution: "Можливе вирішення",
	possibleSolutionEPERM: "Будь ласка, переконайтеся, що клієнт має всі дозволи, необхідні для читання і запису за вказаним вище шляхом.",
	possibleSolutionENOENT: "Будь ласка, переконайтеся, що вищевказаний шлях існує у вашій системі.",
	possibleSolutionEBUSY:
		"Клієнт не зміг отримати доступ до вищевказаного шляху. Будь ласка, перевірте, чи інші програми активно його використовують або блокують.",
	possibleSolutionEMFILE: "Недостатньо дескрипторів файлів або вільного місця в системі.",
	possibleSolutionELOOP: "Будь ласка, переконайтеся, що у вашому локальному розташуванні синхронізації немає символьних посилань, які призводять до нескінченних циклів.",
	possibleSolutionENAMETOOLONG: "Занадто довга назва файлу або шлях до нього. Будь ласка, зменшіть довжину до значення, що підтримується вашою операційною системою.",
	issue: "Проблема",
	path: "Шлях"
}

export default uk
