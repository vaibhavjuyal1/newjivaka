/**
 * Health Tracker Page Component
 * BMI Calculator and Vitals Checker
 */

import React, { useState } from 'react';
import axios from 'axios';
import './HealthTracker.css';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const HealthTracker = () => {
  // BMI Calculator state
  const [bmiData, setBmiData] = useState({
    weight: '',
    height: ''
  });
  const [bmiResult, setBmiResult] = useState(null);
  const [bmiLoading, setBmiLoading] = useState(false);

  // Vitals Checker state
  const [vitalsData, setVitalsData] = useState({
    heartRate: '',
    pulseRate: '',
    systolicBP: '',
    diastolicBP: ''
  });
  const [vitalsResult, setVitalsResult] = useState(null);
  const [vitalsLoading, setVitalsLoading] = useState(false);

  // Handle BMI calculation
  const handleBMICalculate = async (e) => {
    e.preventDefault();
    setBmiLoading(true);
    setBmiResult(null);

    try {
      const response = await axios.post(`${API_BASE_URL}/calculate-bmi`, {
        weight: parseFloat(bmiData.weight),
        height: parseFloat(bmiData.height)
      });

      setBmiResult(response.data);
    } catch (error) {
      console.error('BMI calculation error:', error);
      alert(error.response?.data?.error || 'Failed to calculate BMI. Please check your inputs.');
    } finally {
      setBmiLoading(false);
    }
  };

  // Handle Vitals check
  const handleVitalsCheck = async (e) => {
    e.preventDefault();
    setVitalsLoading(true);
    setVitalsResult(null);

    try {
      const response = await axios.post(`${API_BASE_URL}/check-vitals`, {
        heartRate: vitalsData.heartRate ? parseFloat(vitalsData.heartRate) : null,
        pulseRate: vitalsData.pulseRate ? parseFloat(vitalsData.pulseRate) : null,
        systolicBP: vitalsData.systolicBP ? parseFloat(vitalsData.systolicBP) : null,
        diastolicBP: vitalsData.diastolicBP ? parseFloat(vitalsData.diastolicBP) : null
      });

      setVitalsResult(response.data);
    } catch (error) {
      console.error('Vitals check error:', error);
      alert(error.response?.data?.error || 'Failed to check vitals. Please check your inputs.');
    } finally {
      setVitalsLoading(false);
    }
  };

  return (
    <div className="health-tracker-page">
      <div className="container">
        <div className="page-header">
          <h1>Health Tracker</h1>
          <p className="page-subtitle">
            Monitor your health metrics with our BMI calculator and vitals checker
          </p>
        </div>

        <div className="tracker-grid">
          {/* BMI Calculator */}
          <div className="tracker-section card">
            <div className="section-header">
              <div className="section-icon">🧮</div>
              <h2>BMI Calculator</h2>
            </div>
            <p className="section-description">
              Calculate your Body Mass Index (BMI) to assess your weight category.
              BMI is a screening tool and should be used as a general indicator.
            </p>

            <form onSubmit={handleBMICalculate} className="tracker-form">
              <div className="form-group">
                <label htmlFor="weight">Weight (kg)</label>
                <input
                  type="number"
                  id="weight"
                  className="input"
                  placeholder="Enter weight in kilograms"
                  value={bmiData.weight}
                  onChange={(e) => setBmiData({ ...bmiData, weight: e.target.value })}
                  step="0.1"
                  min="1"
                  max="300"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="height">Height (cm)</label>
                <input
                  type="number"
                  id="height"
                  className="input"
                  placeholder="Enter height in centimeters"
                  value={bmiData.height}
                  onChange={(e) => setBmiData({ ...bmiData, height: e.target.value })}
                  step="0.1"
                  min="50"
                  max="300"
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary" disabled={bmiLoading}>
                {bmiLoading ? 'Calculating...' : 'Calculate BMI'}
              </button>
            </form>

            {bmiResult && (
              <div className="result-box">
                <div className="result-header">
                  <h3>Your BMI Result</h3>
                </div>
                <div className="bmi-display">
                  <div className="bmi-value">{bmiResult.bmi}</div>
                  <div className={`bmi-category category-${bmiResult.category.toLowerCase()}`}>
                    {bmiResult.category}
                  </div>
                </div>
                <div className="result-suggestion">
                  <p>{bmiResult.suggestion}</p>
                </div>
                <div className="result-details">
                  <p>Weight: {bmiResult.weight} kg</p>
                  <p>Height: {bmiResult.height} cm</p>
                </div>
              </div>
            )}
          </div>

          {/* Vitals Checker */}
          <div className="tracker-section card">
            <div className="section-header">
              <div className="section-icon">❤️</div>
              <h2>Vitals Checker</h2>
            </div>
            <p className="section-description">
              Check if your vital signs are within normal ranges. Enter the values you have available.
            </p>

            <form onSubmit={handleVitalsCheck} className="tracker-form">
              <div className="form-group">
                <label htmlFor="heartRate">Heart Rate (bpm)</label>
                <input
                  type="number"
                  id="heartRate"
                  className="input"
                  placeholder="Resting heart rate"
                  value={vitalsData.heartRate}
                  onChange={(e) => setVitalsData({ ...vitalsData, heartRate: e.target.value })}
                  min="30"
                  max="200"
                />
                <small className="input-hint">Normal: 60-100 bpm</small>
              </div>

              <div className="form-group">
                <label htmlFor="pulseRate">Pulse Rate (bpm)</label>
                <input
                  type="number"
                  id="pulseRate"
                  className="input"
                  placeholder="Pulse rate"
                  value={vitalsData.pulseRate}
                  onChange={(e) => setVitalsData({ ...vitalsData, pulseRate: e.target.value })}
                  min="30"
                  max="200"
                />
                <small className="input-hint">Normal: 60-100 bpm</small>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="systolicBP">Systolic BP (mmHg)</label>
                  <input
                    type="number"
                    id="systolicBP"
                    className="input"
                    placeholder="Systolic"
                    value={vitalsData.systolicBP}
                    onChange={(e) => setVitalsData({ ...vitalsData, systolicBP: e.target.value })}
                    min="50"
                    max="250"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="diastolicBP">Diastolic BP (mmHg)</label>
                  <input
                    type="number"
                    id="diastolicBP"
                    className="input"
                    placeholder="Diastolic"
                    value={vitalsData.diastolicBP}
                    onChange={(e) => setVitalsData({ ...vitalsData, diastolicBP: e.target.value })}
                    min="30"
                    max="150"
                  />
                </div>
              </div>
              <small className="input-hint">Normal BP: &lt;120/&lt;80 mmHg</small>

              <button type="submit" className="btn btn-secondary" disabled={vitalsLoading}>
                {vitalsLoading ? 'Checking...' : 'Check Vitals'}
              </button>
            </form>

            {vitalsResult && (
              <div className="result-box">
                <div className="result-header">
                  <h3>Vitals Check Results</h3>
                  <div className={`overall-status status-${vitalsResult.overallStatus}`}>
                    {vitalsResult.overallStatus === 'normal' ? '✓ Normal' : '⚠ Needs Attention'}
                  </div>
                </div>

                {vitalsResult.heartRate && (
                  <div className={`vital-result vital-${vitalsResult.heartRate.status}`}>
                    <div className="vital-header">
                      <span className="vital-name">Heart Rate</span>
                      <span className={`vital-status status-${vitalsResult.heartRate.status}`}>
                        {vitalsResult.heartRate.status.toUpperCase()}
                      </span>
                    </div>
                    <p className="vital-value">{vitalsResult.heartRate.value} bpm</p>
                    <p className="vital-range">Normal Range: {vitalsResult.heartRate.normalRange}</p>
                    <p className="vital-message">{vitalsResult.heartRate.message}</p>
                  </div>
                )}

                {vitalsResult.pulseRate && (
                  <div className={`vital-result vital-${vitalsResult.pulseRate.status}`}>
                    <div className="vital-header">
                      <span className="vital-name">Pulse Rate</span>
                      <span className={`vital-status status-${vitalsResult.pulseRate.status}`}>
                        {vitalsResult.pulseRate.status.toUpperCase()}
                      </span>
                    </div>
                    <p className="vital-value">{vitalsResult.pulseRate.value} bpm</p>
                    <p className="vital-range">Normal Range: {vitalsResult.pulseRate.normalRange}</p>
                    <p className="vital-message">{vitalsResult.pulseRate.message}</p>
                  </div>
                )}

                {vitalsResult.bloodPressure && (
                  <div className={`vital-result vital-${vitalsResult.bloodPressure.status}`}>
                    <div className="vital-header">
                      <span className="vital-name">Blood Pressure</span>
                      <span className={`vital-status status-${vitalsResult.bloodPressure.status}`}>
                        {vitalsResult.bloodPressure.status.toUpperCase()}
                      </span>
                    </div>
                    <p className="vital-value">
                      {vitalsResult.bloodPressure.systolic}/{vitalsResult.bloodPressure.diastolic} mmHg
                    </p>
                    <p className="vital-range">Normal Range: {vitalsResult.bloodPressure.normalRange}</p>
                    <p className="vital-message">{vitalsResult.bloodPressure.message}</p>
                  </div>
                )}

                {vitalsResult.suggestions && vitalsResult.suggestions.length > 0 && (
                  <div className="result-suggestions">
                    <h4>Suggestions:</h4>
                    <ul>
                      {vitalsResult.suggestions.map((suggestion, index) => (
                        <li key={index}>{suggestion}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="health-disclaimer">
          <p>
            <strong>Note:</strong> These tools provide general health information only. 
            They are not a substitute for professional medical advice, diagnosis, or treatment. 
            Always consult with qualified healthcare providers for medical concerns.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HealthTracker;

