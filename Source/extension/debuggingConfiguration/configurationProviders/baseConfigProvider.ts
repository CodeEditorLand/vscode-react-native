// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for details.

import { ConfigurationProviderHelper } from "../../../common/configurationProviderHelper";
import { DebugConfigurationState } from "../debugConfigTypesAndConstants";
import { InputStep, MultiStepInput } from "../multiStepInput";

export abstract class BaseConfigProvider {
	protected configurationProviderHelper: ConfigurationProviderHelper;
	protected maxStepCount: number;

	constructor() {
		this.configurationProviderHelper = new ConfigurationProviderHelper();
	}

	public abstract buildConfiguration(
		input: MultiStepInput<DebugConfigurationState>,
		state: DebugConfigurationState,
	): Promise<InputStep<DebugConfigurationState> | void>;
}
