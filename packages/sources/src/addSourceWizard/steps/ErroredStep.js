import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import {
    EmptyStateBody,
    EmptyState,
    EmptyStateIcon,
    Title,
    Button,
    EmptyStateSecondaryActions,
    EmptyStateVariant,
    Bullseye
} from '@patternfly/react-core';
import { ExclamationCircleIcon } from '@patternfly/react-icons';

const ErroredStep = ({
    onClose,
    onRetry,
    returnButtonTitle,
    message,
    title,
    customText,
    retryText
}) => (
    <Bullseye>
        <EmptyState variant={ EmptyStateVariant.full } className="pf-u-mt-4xl">
            <EmptyStateIcon icon={ ExclamationCircleIcon } color="var(--pf-global--danger-color--100)" className="pf-u-mb-0"/>
            <Title headingLevel="h2" size="xl" className="pf-u-mt-xl">
                {title}
            </Title>
            <EmptyStateBody>
                {message || customText}
            </EmptyStateBody>
            <Button variant="primary" onClick={ onClose }>{returnButtonTitle}</Button>
            <EmptyStateSecondaryActions>
                <Button variant="link" onClick={ onRetry }>{retryText}</Button>
            </EmptyStateSecondaryActions>
        </EmptyState>
    </Bullseye>
);

ErroredStep.propTypes = {
    onClose: PropTypes.func.isRequired,
    onRetry: PropTypes.func.isRequired,
    returnButtonTitle: PropTypes.node.isRequired,
    message: PropTypes.node,
    title: PropTypes.node,
    customText: PropTypes.node,
    retryText: PropTypes.node
};

ErroredStep.defaultProps = {
    title: <FormattedMessage id="wizard.unsuccConfiguration" defaultMessage="Configuration unsuccessful"/>,
    customText: <FormattedMessage id="wizard.errorText" defaultMessage="Your source has not been successfully added."/>,
    retryText: <FormattedMessage id="wizard.retryText" defaultMessage="Retry"/>
};

export default ErroredStep;
