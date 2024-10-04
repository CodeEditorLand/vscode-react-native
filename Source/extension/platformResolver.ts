// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for details.

import { AndroidPlatform } from "./android/androidPlatform";
import { ExponentPlatform } from "./exponent/exponentPlatform";
import { GeneralPlatform, MobilePlatformDeps } from "./generalPlatform";
import { IOSPlatform } from "./ios/iOSPlatform";
import { IRunOptions, PlatformType } from "./launchArgs";
import { MacOSPlatform } from "./macos/macOSPlatform";
import { WindowsPlatform } from "./windows/windowsPlatform";

export class PlatformResolver {
	/**
	 * Resolves the mobile application target platform.
	 */
	public resolveMobilePlatform(
		mobilePlatformString: string,
		runOptions: IRunOptions,
		platformDeps: MobilePlatformDeps,
	): GeneralPlatform {
		switch (mobilePlatformString) {
			// We lazyly load the strategies, because some components might be
			// missing on some platforms (like XCode in Windows)
			case PlatformType.iOS:
				return new IOSPlatform(runOptions, platformDeps);
			case PlatformType.Android:
				return new AndroidPlatform(runOptions, platformDeps);
			case PlatformType.Exponent:
				return new ExponentPlatform(runOptions, platformDeps);
			case PlatformType.Windows:
				return new WindowsPlatform(runOptions, platformDeps);
			case PlatformType.macOS:
				return new MacOSPlatform(runOptions, platformDeps);
			case PlatformType.ExpoWeb:
				return new ExponentPlatform(runOptions, platformDeps);
			default:
				return new GeneralPlatform(runOptions, platformDeps);
		}
	}
}
