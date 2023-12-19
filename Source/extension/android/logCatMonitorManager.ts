// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for details.

import { LogCatMonitor } from "./logCatMonitor";

export class LogCatMonitorManager {
	public static readonly logCatMonitorsCache: {
		[key: string]: LogCatMonitor;
	} = {};

	public static addMonitor(monitor: LogCatMonitor): void {
		LogCatMonitorManager.logCatMonitorsCache[
			monitor.deviceId.toLowerCase()
		] = monitor;
	}

	public static getMonitor(deviceId: string): LogCatMonitor {
		return LogCatMonitorManager.logCatMonitorsCache[deviceId.toLowerCase()];
	}

	public static delMonitor(deviceId: string): void {
		if (LogCatMonitorManager.logCatMonitorsCache[deviceId.toLowerCase()]) {
			LogCatMonitorManager.logCatMonitorsCache[
				deviceId.toLowerCase()
			].dispose();
			delete LogCatMonitorManager.logCatMonitorsCache[
				deviceId.toLowerCase()
			];
		}
	}

	public static cleanUp(): void {
		Object.keys(LogCatMonitorManager.logCatMonitorsCache).forEach(
			(monitor) => {
				LogCatMonitorManager.delMonitor(monitor);
			},
		);
	}
}
