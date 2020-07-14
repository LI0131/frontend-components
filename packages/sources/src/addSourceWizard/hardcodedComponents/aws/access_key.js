/* eslint-disable max-len */
import React from 'react';
import { Popover, TextContent, Text, TextVariants } from '@patternfly/react-core';
import { QuestionCircleIcon } from '@patternfly/react-icons';
import { FormattedMessage } from 'react-intl';

export const DescriptionSummary = () => (<TextContent>
    <Text component={ TextVariants.p }>
        <FormattedMessage id="wizard.CreateAnAccessKeyInYourAwsUserAccountAndEnterTheDetailsBelow" defaultMessage="Create an access key in your AWS user account and enter the details below." />
    </Text>
    <Text component={ TextVariants.p }>
        <FormattedMessage id="wizard.ForSufficientAccessAndSecurityRedHatRecommendsUsingThePowerUserIdentityAndAccessManagementIamPolicyForYourAwsUserAccount" defaultMessage="For sufficient access and security, Red Hat recommends using the Power user identity and access management (IAM) policy for your AWS user account. " />
        <Popover
            aria-label="Help text"
            position="bottom"
            bodyContent={
                <React.Fragment>
                    <Text component={ TextVariants.p }>
                        <FormattedMessage id="wizard.ThePowerUserPolicyAllowsTheUserFullAccessToApiFunctionalityAndAwsServicesForUserAdministrationCreateAnAccessKeyInTheSecurityCredentialsAreaOfYourAwsUserAccountWhenAddingYourAwsAccountAsASourceTheAccessKeyIdAndSecretAccessKeyActAsYourUserIdAndPassword" defaultMessage="The Power user policy allows the user full access to API functionality and AWS services for user administration. Create an access key in the Security Credentials area of your AWS user account. When adding your AWS account as a source, the access key ID and secret access key act as your user ID and password." />
                    </Text>
                </React.Fragment>
            }
        >
            <QuestionCircleIcon />
        </Popover>
    </Text>
</TextContent>);
