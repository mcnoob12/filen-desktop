const en: {
	[key: string]: string
} = {
	loginEmailPlaceholder: "आपका ईमेल एड्रेस",
	loginPasswordPlaceholder: "आपका पासवर्ड",
	loginTwoFactorCodePlaceholder: "टू फैक्टर कोड",
	loginBtn: "लॉगिन करे",
	titlebarLogin: "लॉगिन करे",
	loginInvalidFields: "गलत फ़ील्ड्स क्रिपया चेक करे",
	loginInvalidEmail: "गलत इ-मेल एड्रेस",
	loginInvalidEmailOrPassword: "गलत इ-मेल या पासवर्ड",
	loginAccountNotYetActivated: "आपका अकाउंट अभी तक एक्टिवटे नहीं हुआ है",
	loginWrongEmailOrPassword: "गलत इ-मेल या पासवर्ड",
	invalidTwoFactorKey: "गलत टू-फैक्टर ऑथेंटिकेशन कोड",
	titlebarMain: "फ़िलेंन",
	titlebarSettings: "सेटिंग्स",
	titlebarSelectFolderRemote: "क्लाउड फोल्डर सेलेक्ट करें",
	titlebarDownload: "डाउनलोड",
	titlebarCloud: "क्लाउड",
	titlebarUpload: "अपलोड",
	titlebarSelectiveSync: "कुछ फिक्स्ड सिंक करें",
	close: "क्लोज करें",
	save: "सेव करें",
	syncingItemsFooterSingular: "सिंक हो रहा है __COUNT__ आइटम",
	syncingItemsFooterPlural: "सिंक हो रहे है __COUNT__ आइटम्स",
	syncingFooterEverythingSynced: "सब कुछ सिंक हो चूका है",
	aboutRemaining: " बचा समय: __TIME__ ",
	noSyncActivityYet: "अभी कुछ नहीं चल रहा है",
	createOne: "क्रिएट करें",
	noSyncLocationsSetupYet: "कोई सिंक लोकेशन सेटअप नहीं है",
	storageUsed: "__USED__ ख़तम हो गया __MAX__ में से",
	quitFilen: "क्लोज करे",
	openWebsite: "वेबसाइट ओपन करें",
	settings: "सेटिंग्स",
	actions: "एक्शन्स",
	youAreOffline: "आप बिना इंटरनेट के हो",
	forgotPasswordBtn: "पासवर्ड रिसेट करें",
	createAccountBtn: "अकाउंट क्रिएट करें",
	select: "सेलेक्ट करें",
	thisFolderIsEmpty: "यह फोल्डर खली है",
	createFolder: "फोल्डर बनायें",
	create: "बनायें",
	downloadDone: "डाउनलोड ख़तम हो गया है",
	openFolder: "फोल्डर खोलें",
	download: "डाउनलोड करें",
	change: "चेंज करें",
	open: "ओपन करें",
	noFilesOrFoldersUploadedYet: "अभी तक कोई फाइल या फोल्डर अपलोड नहीं हुआ है",
	uploadDone: "अपलोड हो चुका है",
	preparingUpload: "प्रेपरिंग फॉर अपलोड",
	preparingUploadFolders: "क्रिएटिंग फोल्डर स्ट्रक्चर",
	launchAtSystemStartup: "सिस्टम ऑन होने पर खोलें",
	darkMode: "डार्क मोड",
	excludeDot: "डॉट से शुरू होने वाले फाइल्स और फ़ोल्डर्स को नं यूज़ करें",
	excludeDotTooltip: "डॉट (.) से शुरू होने वाले फाइल्स और फ़ोल्डर्स को नं यूज़ करें।  जैसे .gitignore",
	language: "भाषा",
	saveLogs: "सेव लॉग्स",
	cannotCreateSyncLocation: "Cannot create sync location",
	cannotCreateSyncLocationSubdir: "You need to select at least one sub directory",
	cannotCreateSyncLocationLoop:
		"The local path you have selected is already a configured sync location. This could lead to endless sync loops",
	cannotCreateSyncLocationAccess: "Could not access the local directory. Maybe you don't have the permissions?",
	selectRemoteLocation: "Select remote location",
	syncMode: "Sync mode",
	syncModeTwoWay: "Two Way",
	syncModeLocalToCloud: "Local to Cloud",
	syncModeCloudToLocal: "Cloud to Local",
	syncModeLocalBackup: "Local backup",
	syncModeCloudBackup: "Cloud backup",
	selectiveSync: "Selective sync",
	selectiveSyncTooltip: "Configure which folders and files you want to have synced locally",
	configure: "Configure",
	filenignoreTooltip: "Exclude paths and patterns from syncing. Works just like a .gitignore file",
	edit: "Edit",
	paused: "Paused",
	deleteSyncLocation: "Delete sync location",
	confirmDeleteSyncLocation: "Are you sure you want to delete this sync location?",
	delete: "Delete",
	filenignoreHeader: "Ignored pattern, separated by a new line",
	accountStorageUsed: "__PERCENT__% of __MAX__ used",
	logout: "Logout",
	accountCurrentPlan: "Current plan",
	accountUpgrade: "Upgrade",
	accountStorageInUse: "__PERCENT__% in use",
	confirmLogout: "Are you sure you want to logout?",
	resumeSyncing: "Resume syncing",
	noSyncIssues: "No sync issues",
	clearSyncIssues: "Clear issues",
	clearSyncIssuesInfo:
		"When clearing the shown issues the client will attempt to sync again. Please make sure to resolve all issues before clearing them.",
	clear: "Clear",
	uploadBandwidthThrottling: "Upload bandwidth throttling",
	unlimited: "Unlimited",
	downloadBandwidthThrottling: "Download bandwidth throttling",
	networkThrottling: "Network throttling",
	maximumUploadBandwidth: "Maximum upload bandwidth (in Kbps)",
	maximumDownloadBandwidth: "Maximum download bandwidth (in Kbps)",
	disableThrottlingInfo: "Setting a value of 0 will disable throttling",
	resetToDefaults: "Reset to defaults",
	changeKeybind: "Change keybind",
	pressKeyOrCombo: "Press any key or keycombo",
	settingsGeneral: "General",
	settingsSyncs: "Syncs",
	settingsAccount: "Account",
	settingsIssues: "Issues",
	settingsNetworking: "Networking",
	settingsKeybinds: "Keybinds",
	createFolderPlaceholder: "Folder name",
	invalidFolderName: "Invalid folder name",
	titlebarCloudWindow: "Cloud",
	updateAvailable:
		"There is an update available, please consider downloading the latest version for bug fixes and performance improvements",
	downloadUpdateBtn: "Download update",
	pause: "Pause",
	resume: "Resume",
	keybinds_uploadFolders: "Upload folders",
	keybinds_uploadFiles: "Upload files",
	keybinds_openSettings: "Open settings",
	keybinds_pauseSync: "Pause sync",
	keybinds_resumeSync: "Resume sync",
	keybinds_openWebsite: "Open website",
	keybindNotBound: "Not bound",
	syncing: "Syncing..",
	maxStorageReached:
		"You have reached the maximum storage volume of your account. In order to be able to continue synchronizing, we recommend that you upgrade.",
	syncTaskDownloadFromRemote: "Downloaded from the cloud",
	syncTaskUploadToRemote: "Uploaded to the cloud",
	syncTaskRenameInRemote: "Renamed in the cloud",
	syncTaskRenameInLocal: "Renamed locally",
	syncTaskMoveInRemote: "Moved in the cloud",
	syncTaskMoveInLocal: "Moved locally",
	syncTaskDeleteInRemote: "Deleted in the cloud",
	syncTaskDeleteInLocal: "Deleted locally",
	queued: "Queued",
	acquiringSyncLock: "Acquiring sync lock..",
	syncLocationCreated: "Sync location created. To start the sync you have to unpause it.",
	checkingChanges: "Checking changes..",
	syncModeTwoWayInfo: "Mirror every action in both directions",
	syncModeLocalToCloudInfo: "Mirror every action locally to the cloud but never act on remote changes",
	syncModeCloudToLocalInfo: "Mirror every action from the cloud but never act on local changes",
	syncModeLocalBackupInfo: "Only upload data to the cloud, never delete anything or act on remote changes",
	syncModeCloudBackupInfo: "Only download data from the cloud, never delete anything or act on local changes",
	cancel: "Cancel",
	cannotCreateSyncLocationLoop2:
		"The remote path you have selected is already a configured sync location. This could lead to endless sync loops",
	titlebarUpdateAvailable: "Update available",
	updateWindowInfo:
		"A new version has been downloaded and is ready to be installed. Please install it as soon as possible to benefit from bug fixes and new features.",
	updateWindowButton: "Install",
	updateWindowInfo2: "The app will exit and start the update flow. Please do not interrupt this process.",
	titlebarUpdateInstalled: "Update installed",
	clearLocalEventLog: "Clear local event log",
	clearLocalEventLogInfo: "This will clear the local event log shown. Are you sure? This action cannot be undone!",
	copied: "Copied",
	publicLinkCopied: "Public link copied to clipboard",
	clearLocalTrashDirs: "Clear local trash bins",
	clearLocalTrashDirsInfo: "Clearing the local trash bins cannot be undone! Are you sure?",
	updateWindowInfo3:
		"The client will exit and start the update flow in the background. It will restart itself when it is done. Please do not interrupt this process.",
	pleaseLogin: "Please login",
	traySyncIssues: "__NUM__ sync issues",
	traySyncing: "Syncing __NUM__ items",
	everythingSynced: "Everything synced",
	trayWarnings: "__NUM__ warnings",
	trayNoSyncSetup: "No sync locations setup yet",
	trayNoSyncRemoteSetup: "No remote sync locations setup yet",
	timeSinceSeconds: "__TIME__ seconds ago",
	timeSinceMinutes: "__TIME__ minutes ago",
	timeSinceHours: "__TIME__ hours ago",
	timeSinceDays: "__TIME__ days ago",
	timeSinceMonths: "__TIME__ months ago",
	timeSinceYears: "__TIME__ years ago",
	trayMenuShow: "Show",
	trayMenuForceSync: "Force sync",
	trayMenuUploadFolders: "Upload folders",
	trayMenuUploadFiles: "Upload files",
	trayMenuSettings: "Settings",
	trayMenuQuit: "Quit Filen",
	openLocalFolder: "Open local folder",
	openLocalTrash: "Open local trash folder",
	help: "Help",
	possibleSolution: "Possible solution",
	possibleSolutionEPERM: "Please make sure that the client has all permissions needed to read and write to the above path.",
	possibleSolutionENOENT: "Please make sure the above path exists on your system.",
	possibleSolutionEBUSY:
		"The client could not access the above path. Please check if other programs are actively using it or locking it.",
	possibleSolutionEMFILE: "Not enough file descriptors or space left on your system.",
	possibleSolutionELOOP: "Please make sure your local sync location does not contain symlinks that result into infinite loops.",
	possibleSolutionENAMETOOLONG: "File name or path too long. Please reduce the length to a value supported by your operating system.",
	issue: "Issue",
	path: "Path"
}

export default en
